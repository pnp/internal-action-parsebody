# Internal Action Parse Body

GitHub action to parse a `.yml`-based issue body and extract the value of an issue section.

This GitHub Action (created using typescript) is intended to be used by PnP repositories. You're welcome to look at the code and use it to implement your own solutions, but it is really indented to be used only by PnP repos.

## Usage

### Pre-requisites

You'll need a `.yml`-based issue template -- which labels every form section with level 3 headings (`###`).

Create a workflow `.yml` file in `.github/workflows` directory of your repo. 

> MORE TO COME
<!-- An [example workflow](#example-workflow---cli-for-microsoft-365-runscript) is available below. For more information, reference the GitHub Help Documentation for [Creating a workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file). -->

<!-- #### Optional requirement
Since `action-cli-login` requires user name and password which are sensitive pieces of information, it would be ideal to store them securely. We can achieve this in a GitHub repo by using [secrets](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets). So, click on `settings` tab in your repo and add 2 new secrets:
- `adminUsername` - store the admin user name in this (e.g. user@contoso.onmicrosoft.com)
- `adminPassword` - store the password of that user in this.
These secrets are encrypted and can only be used by GitHub actions. -->

<!-- ### Inputs
- `CLI_MICROSOFT365_SCRIPT_PATH` : Relative path of the script in your repo.
- `CLI_MICROSOFT365_SCRIPT` : The script to run
- `IS_POWERSHELL` : `true|false` Used only with CLI_MICROSOFT365_SCRIPT. If true the assumption is the script passed in CLI_MICROSOFT365_SCRIPT will be a PowerShell script, otherwise the assumption is bash script. Default is false

One of `CLI_MICROSOFT365_SCRIPT_PATH` / `CLI_MICROSOFT365_SCRIPT` is mandatory, in case both are defined `CLI_MICROSOFT365_SCRIPT_PATH` gets preference.

### Example workflow - CLI for Microsoft 365 Runscript
On every `push` build the code, then deploy and then send an email using CLI for Microsoft 365 Runscript action. -->

<!-- ```yaml
name: SPFx CICD with CLI for Microsoft 365

on: [push]

jobs:
  
  runscript:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [10.x]
    
    steps:
    
    # CLI for Microsoft 365 login action
    - name: Login to tenant
      uses: pnp/action-cli-login@v2.0.0
      with:
        ADMIN_USERNAME:  ${{ secrets.adminUsername }}
        ADMIN_PASSWORD:  ${{ secrets.adminPassword }}
    
    # CLI for Microsoft 365 runscript action option 1 (single line of script as input)
    - name: Send email
      uses: pnp/action-cli-runscript@v2.0.0
      with:
        CLI_MICROSOFT365_SCRIPT: m365 spo mail send --webUrl https://contoso.sharepoint.com/sites/teamsite --to 'user@contoso.onmicrosoft.com' --subject 'Deployment done' --body '<h2>CLI for Microsoft 365</h2> <p>The deployment is complete.</p> <br/> Email sent via CLI for Microsoft 365 GitHub Action.'
    
    # CLI for Microsoft 365 runscript action option 2 (script file as input)
    - name: Create lists
      uses: pnp/action-cli-runscript@v2.0.0
      with:
        CLI_MICROSOFT365_SCRIPT_PATH: ./script/lists.ps1 
        #lists.ps1 will have all the required CLI for Microsoft 365 commands
```

#### Self-hosted runners
If self-hosted runners are used for running the workflow, then please make sure that they have `PowerShell` or `bash` installed on them. 

## Release notes

### v2.0.0

- Renames action to 'CLI for Microsoft 365 Runscript'

### v1.0.0
- Added inital 'CLI for Microsoft 365 runscript' GitHub action solving #2 -->