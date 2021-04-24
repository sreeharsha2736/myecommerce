import express from "express";
import products from "./data.js";
import dotenv from "dotenv";
import config from "./config.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoute.js";
dotenv.config();

var app = express();
const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.get("/products", (req, res) => {
  res.send(products);
});
app.get("/products/:id", (req, res) => {
  const productId = req.params.id;
  res.send(products.find((x) => x.id == productId));
});

app.listen(5000, () => console.log("sever started"));

app.use(express.static(path.join(__dirname, "/./frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(`${__dirname}/./frontend/build/index.html`));
});

app.listen(config.PORT, () => {
  console.log("Server started at http://localhost:5000");
});
