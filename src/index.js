"use strict";

var fs = require("fs");
const { Resend } = require("resend");

const char = (a) => String.fromCharCode(a);

const irand = (x) => Math.floor(Math.random() * x);

const sample = (xs) => xs.at(irand(xs.length));

const range = (x) => (y) => x > y ? [] : [x, ...range(x + 1)(y)];

const srand = (rs) => (n) => n <= 0 ? "" : char(sample(rs)) + srand(rs)(n - 1);

const identifier = srand([
  ...range(48)(57), // include 0-9
  ...range(65)(90), // include A-Z
  ...range(97)(122), // include a-z
]);

// console .log (identifier(6))  //=> xUCXPI
// console .log (identifier(10)) //=> JQvct8XeGt
// console .log (identifier(20)) /

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
          data: { email, username },
        } = params;

        const { id } = result;

        strapi.log.debug(Object.entries(result), Object.entries(params));

        const domain =
          "https://76c1-186-120-37-14.ngrok-free.app/uploads/image-6.png";
        const token = identifier(6);
        try {
          const emailTemplate2 = fs
            .readFileSync(
              __dirname + "/email_templates/new_user_confirmation.html",
              "utf-8"
            )
            .replaceAll("%%%domain%%%", domain)
            .replaceAll("%%%CODE%%%", token)
            .replaceAll("%%%email%%%", email)
            .replaceAll("%%%id%%%", id);

          const resend = new Resend(process.env.RESEND_API_KEY);

          const entry = await strapi.entityService.create(
            "api::register-token.register-token",
            {
              data: {
                Token: token,
                Email: email,
                Valid: false,
              },
            }
          );

          await resend.emails.send({
            from: "Platter developers <platter@sotoarmando.dev>",
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
              "X-Entity-Ref-ID": email,
            },
            tags: [
              {
                name: "category",
                value: "confirm_email",
              },
            ],
          });
        } catch (err) {
          console.log(err);
        }
      },
    });
  },
};
