import { makeConsoleLogger } from "@notionhq/client/build/src/logging";

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  if (process.env.NODE_ENV === 'production') {
    const api_key = process.env.DIGITAL_HUMANI_API_KEY
  } else {
    const api_key = process.env.DIGITAL_HUMANI_API_KEY_SANDBOX
  }

  const body = req.body;

  var myHeaders = new Headers();
  myHeaders.append("X-Api-Key", api_key);
  myHeaders.append("Content-Type", "application/json");

  const tree = {
    treeCount: 1,
    enterpriseId: "c118f088",
    projectId: "93333333",
    user: body.email,
  };

  var raw = JSON.stringify(tree);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://api.sandbox.digitalhumani.com/tree", requestOptions)
    .then((response) => {
      res.status(200).send({ message: response });
    })
    .catch((error) => {
      res.status(500).send({ message: error });
    });
}
