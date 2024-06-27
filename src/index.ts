import express from "express";
import * as bodyParser from 'body-parser';
import router from "./routes/routes";

const app = express();

app.use(bodyParser.json());
app.use("/", router)

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});