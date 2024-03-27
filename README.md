# Sail Point challenge

SailPoint home coding challenge

## Configure your local environment

- An Azure account with an active subscription
One of the following tools for creating Azure resources:
- Azure CLI version 2.4 or later.
- The Azure Az PowerShell module version 5.9.0 or later.
- Node.js version 18 or above.

Install the Azure Functions Core Tools

https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-cli-node?tabs=macos%2Cazure-cli%2Cbrowser&pivots=nodejs-model-v4#install-the-azure-functions-core-tools

## Getting Started

use command-line tools to create a JavaScript function that responds to HTTP requests. After testing the code locally, you deploy it to the serverless environment of Azure Functions.

### Run the function locally

`func start`

https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-cli-node?tabs=macos%2Cazure-cli%2Cbrowser&pivots=nodejs-model-v4

### Environment Variables

the function uses the following environment variables:

"FUNCTIONS_WORKER_RUNTIME": "node",
"AzureWebJobsFeatureFlags": "EnableWorkerIndexing",
"AzureWebJobsStorage": "UseDevelopmentStorage=true", // or your Azure Storage connection string
"EMAIL_TO": "to@email.com",
"GITHUB_URL": "https://api.github.com/graphql",
"GITHUB_TOKEN": "ghp_key",
"GITHUB_REPO": "owner/repo",
"SENDGRID_API_KEY": "SG.-key",
"SENDGRID_FROM_EMAIL": "from@email.com"