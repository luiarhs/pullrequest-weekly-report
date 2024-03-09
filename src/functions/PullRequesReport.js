const { app } = require("@azure/functions");
const { Octokit } = require("@octokit/core");

app.http("PullRequestReport", {
	methods: ["POST"],
	authLevel: "anonymous",
	handler: async (request, context) => {
		context.log(`Http function processed request for url "${request.url}"`);

		const octokit = new Octokit({
			headers: {
				authorization: `token ${process.env.GITHUB_TOKEN}`
			}
		});

		try {
            // TODO: Make variables configurable as function input or environment variables
			const owner = "luiarhs";
			const repo = "sailpoint-challenge";
			const branch = "main";
            
            const data = await octokit.graphql({
                headers: {
                    accept: 'application/vnd.github+json',
                    authorization: `token ${pat}`
                },
                query: `query  Repository {
                    repository(owner: "${owner}", name: "${repo}") {
                        ref(qualifiedName: "${branch}") {
                            target {
                                ... on Commit {
                                    oid
                                }
                            }
                        }
                    }
                }`
            });

			context.log(data);
		} catch (error) {
			if (error instanceof GraphqlResponseError) {
				console.log("Request failed:", error.request); // { query, variables: {}, headers: { authorization: 'token secret123' } }
				console.log(error.message); // Field 'bioHtml' doesn't exist on type 'User'
			} else {
				// handle non-GraphQL error
			}
			context.log(
				`Error! Status: ${error.status}. Message: ${error.response.data.message}`
			);
		}

		return { body: repository };
	},
});
