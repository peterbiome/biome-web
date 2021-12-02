const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async (req, res) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  res.status(200).json({ response });
};

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require('@sendgrid/mail')
var request = require("request");


const sendMail = (to, from, subject, text, html) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
  })
}

const addContact = (email, first, last) => {
  var options = { method: 'PUT',
  url: 'https://api.sendgrid.com/v3/marketing/contacts',
  headers: 
   { 'content-type': 'application/json',
     authorization: 'Bearer ' + process.env.SENDGRID_API_KEY },
  body: 
   { contacts: 
      [ { email: email,
          first_name: first,
          last_name: last,
         } ] },
  json: true };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
  });
}


