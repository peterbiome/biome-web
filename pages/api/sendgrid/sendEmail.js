const sgMail = require("@sendgrid/mail");

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const body = req.body;

  const msg = {
    to: body.email,
    from: "benjamin@biomeinvest.com",
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      res.status(200).json({ message: "Email sent!" });
      res.end();
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Failed" });
      res.end();
    });
}
