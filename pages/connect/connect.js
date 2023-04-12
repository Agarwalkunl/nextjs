const { MongoClient } = require("mongodb");
const client = new MongoClient(
  "mongodb+srv://pawanag620:we5RpjidL0godDeB@sample.mcb7jcu.mongodb.net/kunal?retryWrites=true&w=majority"
);
async function con() {
  let re = await client.connect();
  let db = re.db("kunal");
  console.log("connect");
}
export { con };
