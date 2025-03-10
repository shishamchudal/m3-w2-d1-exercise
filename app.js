const { MongoClient } = require("mongodb");

// Create Instance of MongoClient for mongodb
const client = new MongoClient("mongodb://127.0.0.1:27017/nodemongo");

// Connect to database
client
  .connect()
  .then(() => {
    // console.log("Connected Successfully & Database Created!");
    // //Close the database connection
    // client.close();

    var dbo = client.db("nodemongo");
    // dbo.createCollection("customers").then(function () {
    //   console.log("Collection created");
    //   //Close the database connection
    //   client.close();
    // });

    var custData = { name: "Westcliff", address: "Irvine, CA" };
    dbo
      .collection("customers")
      .insertOne(custData)
      .then(function () {
        console.log("1 document inserted");
        client.close();
      });
  })
  .catch((error) => console.log("Failed to connect", error));
