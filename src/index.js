'use strict';

var fs = require('fs');
const  {Resend} = require('resend');

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  

  bootstrap({ strapi }) {

    strapi.db.lifecycles.subscribe({
      models: ["plugin::users-permissions.user"],

      // Send email to new user
      async afterCreate({ params, result }) {
        const {
           data: { email, username, },
        } = params;

        const {id } = result;
         
        strapi.log.debug(Object.entries(result), Object.entries(params))
        
        const domain = "https://725c-186-120-37-14.ngrok-free.app";
        
        try{
          const emailTemplate2 = fs.readFileSync(__dirname + "/email_templates/user_confirmation.html","utf-8").replace("%%%domain%%%", domain).replace("%%%id%%%", id);

          const resend =  new Resend(process.env.RESEND_API_KEY);

          await resend.emails.send({
            from: 'Platter developers <platter@sotoarmando.dev>',
            to: [email],
            subject: `Welcome ${username}`,
            text: emailTemplate2,
            html: emailTemplate2,
            // attachments: [
            //   {
            //     filename: 'invoice.pdf',
            //     content: invoiceBuffer,
            //   },
            // ],
            headers: {
              'X-Entity-Ref-ID': email,
            },
            tags: [
              {
                name: 'category',
                value: 'confirm_email',
              },
            ],
          });
        } catch(err) {
            console.log(err);
        }
      },
    });

  }
};
