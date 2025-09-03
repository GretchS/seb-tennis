const API_URL = "https://seb-tennis.vercel.app/api/utr";
let utrValue = "9.21";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ utr: utrValue });
  } else if (req.method === "POST") {
    utrValue = req.body.utr;
    res.status(200).json({ utr: utrValue });
  } else {
    res.status(405).end();
  }
}