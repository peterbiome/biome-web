
var request = require("request");

export default function handler(req, res) {
    if (req.method !== 'PUT') {
      res.status(405).send({ message: 'Only PUT requests allowed' })
      return
    }
  
    const body = req.body
  
    var options = { method: 'PUT',
    url: 'https://api.sendgrid.com/v3/marketing/contacts',
    headers: 
     { 'content-type': 'application/json',
       authorization: 'Bearer ' + process.env.SENDGRID_API_KEY},
    body: 
     { contacts: 
        [ { email: body.email,
            first_name: body.firstName,
            last_name: body.lastName,
           } ] },
    json: true };
  
    request(options, function (error, response, body) {
      if (error) {
          throw new Error(error)
      } else {
        console.log('Contact added');
        res.status(200).json({ message: 'Contact Added!' })
        res.end()
      };
      
    });
  }