const { app } = require("@azure/functions");
const sgMail = require('@sendgrid/mail');
const template = require('../templates/header');


app.http("SendEmail", {
	methods: ["POST"],
	authLevel: "anonymous",
    route: 'email/',
	handler: async (request, context) => {
		context.log(`Http function processed request for url "${request.url}"`);

		//TODO: Validate email address and send email
		const obj = {
			subject: "SendGrid Template Demo",
			heading: "Welcome to Okaydexter",
			description:
			  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			image:
			  "https://images.unsplash.com/photo-1583552188819-4cab7da34a31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
		  };

		try {
			// TODO: Make variables configurable as function input or environment variables
			sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`);

			const msg = {
				to: 'luiarhs@gmail.com',
				from: 'noreply@kief.mx',
				subject: 'Pull Requests Report - Weekly',
				text: 'SailPoint is the best!',
				html: template,
			  };
			const data = await sgMail.send(msg);

			context.log(data);
		} catch (error) {
			context.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`);
		}

		return { body: "Email sent!"};
	},
});
