const { MongoClient } = require("mongodb");
const nc = require("next-connect");
const client = new MongoClient(
  "mongodb+srv://pawanag620:we5RpjidL0godDeB@sample.mcb7jcu.mongodb.net/kunal?retryWrites=true&w=majority"
);
let re, db, co;
async function con() {
  re = await client.connect();
  db = re.db("kunal");
  co = db.collection("agarwal");
}
con();
export default async function jj(req, res) {
  if (req.method == "GET") {
    let coo = await co.find().toArray();
    res.json(coo);
  }
  if (req.method == "POST") {
    res.json(req.body);
  }
}

// const handler = nc()
// .get(async (req, res) => {
//   let coo = await co.find().toArray();
//   res.send(coo);
// })
// .post((req, res) => {
//   res.json({ hello: "world" });
// })
// .put(async (req, res) => {
//   res.end("async/await is also supported!");
// })
// .patch(async (req, res) => {
//   throw new Error("Throws me around! Error can be caught and handled.");
// })
// .delete(async (req, res) => {
//   res.end("async/await is also supported!");
// });
// export default handler;
