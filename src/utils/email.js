const sgMail = require('@sendgrid/mail');
const header = require('../templates/header');
const footer = require('../templates/footer');

async function send(context, parameters) {
    
    context.log('Sending email..');
    const {to, repo, pulls} = parameters;
    
    //TODO: Validate email address previous to send email
    
    try {
        sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`);
        
        let body = '';
        // Create the email template
        pulls.forEach(pull => {

            const state = pull.isDraft ? 'in progress' : pull.state.toLowerCase();

            const stateColors = {
                open: '#238636',
                merged: '#8957e5',
                inprogress: '#6e7680',
                closed: '#da3633'
            };
              
            const color = stateColors[state];

            body += 
                `<tr style="color: #304254">
                    <td style="padding:10px;">${pull.title}</td>
                    <td style="padding:10px;">
                        <img class="max-width" border="0" align="left" style="display:block; border-radius: 50%;"
                        height="18" width="18" data-proportionally-constrained="true" data-responsive="false"
                        src="${pull.avatarlink}">
                        &nbsp;@${pull.login}
                    </td>
                    <td style="padding:10px; text-decoration: none; color: ${color};">${state}</td>
                    <td style="padding:10px;">${pull.createdAt}</td>
                    <td style="padding:10px; text-decoration: none;">
                        <a href="${pull.permalink}" target="_blank">View it on GitHub</a>
                    </td>
                </tr>`;
        });

        const template = header + body + footer; 

        const msg = {
            to,
            from: `${process.env.SENDGRID_FROM_EMAIL}`,
            subject: `Your Weekly Rerport: ${repo}`,
            html: template,
        };

        // Probably log pulls is better than the html template to avoid log size issues 
        context.log(msg);

        const data = await sgMail.send(msg);

        context.log('Email sent!');
    } catch (error) {
        context.error(`Error! Status: ${error.status}. Message: ${error.response.data.message}`);
    }
}

module.exports = {
    send
}