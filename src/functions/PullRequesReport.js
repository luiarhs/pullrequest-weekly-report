const { app } = require("@azure/functions");
const { Octokit } = require("@octokit/core");

app.http("PullRequestReport", {
	methods: ["POST"],
	authLevel: "anonymous",
    route: 'report/',
	handler: async (request, context) => {
		context.log(`Http function processed request for url "${request.url}"`);

		//TODO: Validate email address and send email
		const octokit = new Octokit();

		try {
			// TODO: Make variables configurable as function input or environment variables
			const owner = "brave";
			const repo = "security-action";

			// Filter pull requests created in the last week
			const lastWeek = new Date();
			lastWeek.setDate(lastWeek.getDate() - 7);

			const data = await octokit.graphql({
				headers: {
					accept: 'application/vnd.github+json',
					authorization: `token ${process.env.GITHUB_TOKEN}`
				},
				query: `query Search {
					search(
						query: "repo:${owner}/${repo} type:pr created:>${lastWeek.toISOString()}",
						type: ISSUE
						first: 100
					) {
						issueCount
						nodes {
							... on PullRequest {
								author {
									login
									url
								}
								baseRefName
								createdAt
								isDraft
								permalink
								state
								title
								url
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
