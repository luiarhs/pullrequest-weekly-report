const { app } = require("@azure/functions");
const { Octokit } = require("@octokit/core");
const email = require("../utils/email");

app.http("PullRequestReport", {
	methods: ["POST"],
	authLevel: "anonymous",
    route: 'report/',
	handler: async (request, context) => {
		context.log(`Http function processed request for url "${request.url}"`);
		// Create a new Octokit client
		const octokit = new Octokit({
            auth: `${process.env.GITHUB_TOKEN}`
        });

		try {
			// TODO: Make variables configurable as function input or environment variables
			const repo = `${process.env.GITHUB_REPO}`; //`${request.params.repo
			context.log(`Getting pull requests for ${repo}`);

			// Filter pull requests created in the last week
			const lastWeek = new Date();
			lastWeek.setDate(lastWeek.getDate() - 7);

			const data = await octokit.graphql(
				`query Search {
					search(
						query: "repo:${repo} type:pr created:>${lastWeek.toISOString()}",
						type: ISSUE
						first: 100
					) {
						issueCount
						nodes {
							... on PullRequest {
								author {
									login
									avatarUrl(size: 32)
								}
								createdAt
								isDraft
								permalink
								state
								title
							}
						}
					}
				}`
			);

			// Map data to a more readable format
			const pulls = data.search.nodes.map((pull) => {
				return {
					avatarlink: pull.author.avatarUrl,
					login: pull.author.login,
					createdAt: pull.createdAt.split("T")[0],
					isDraft: pull.isDraft,
					permalink: pull.permalink,
					state: pull.state,
					title: pull.title,
				};
			});

			// Send email
			await email.send(context, {to: "luiarhs@gmail.com", repo, pulls});

		} catch (error) {
			if (error instanceof GraphqlResponseError) {
				console.log("Request failed:", error.request);
				console.error(error.message);
			} else {
				//TODO: handle non-GraphQL error
			}
			context.log(
				`Error! Status: ${error.status}. Message: ${error.response.data.message}`
			);
			return { status: 500, body: error.response.data.message || "Error! Email not sent."};
		}

		return { status: 200, body: "Email sent!"};
	}
});
