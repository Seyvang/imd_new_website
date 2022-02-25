import { members } from "../../../data/members";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(members);
  } else if (req.method === "POST") {
    res.status(200).send("This is Post request");
  }
}
