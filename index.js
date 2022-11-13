import app from "./server.js";
import mongodb from "mongodb";
//import ReviewsDAO from "./dao/reviewsDAO.js";

const MongoClient = mongodb.MongoClient;
const mongo_username = process.env['MONGO_USERNAME'];
const mongo_password = process.env['MONGO_PASSWORD'];
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.glovk8o.mongodb.net/?retryWrites=true&w=majority`;

const port = 4000;
MongoClient.connect(
  uri,
  {
    maxPoolSize: 40,
    wtimeoutMS: 3000,
    useNewUrlParser: true
  }
).catch(err => {
  console.error(err.stack);
  process.exit(1);
})
  .then(async client => {
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    })
  }); 