import * as core from '@actions/core';
import {context} from '@actions/github';

async function run(): Promise<void> {
    try {
        core.debug(`Using v0.0.13-alpha`)
        // const issue: string = core.getInput('issue')
        // core.debug(`Got issue: ${issue}  ...`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

        // const gitHubIssue  = JSON.parse(issue);
        // core.debug(`Got issue body: ${gitHubIssue.body} ...`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
        const issueBody: string = core.getInput('issueBody');
        const separator: string = core.getInput('separator');
        const sectionName: string = core.getInput('sectionName');
        core.debug(`Got issue body: "${issueBody}"`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
        core.debug(`Got separator: "${separator}"`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
        core.debug(`Got sectionName: "${sectionName}"`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

        const bodySections: Array<string> = issueBody.split(separator);
        core.debug(`Got issue body lines: ${JSON.stringify(bodySections)} ...`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

        const bodyArray: { [key: string]: string } = {};
        bodySections.forEach(section => {
            // Split the section into header and content            
            const sectionParts: Array<string> = section.split("\n\n", 2);
            if (sectionParts.length === 2 && sectionParts[0] !== "") {
                bodyArray[sectionParts[0]] = sectionParts[1];
                core.debug(`Section Part: '${sectionParts[0]}': '${sectionParts[1]}'`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
            }
        });

        const sectionContent: string = bodyArray[sectionName] || "";
        core.setOutput('sectionContent',sectionContent);
        
    } catch (error) {
        if (error instanceof Error) core.setFailed(error.message)
    }
}

run()