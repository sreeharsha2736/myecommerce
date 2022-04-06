import dotenv from "dotenv";
dotenv.config();

export default {
  PORT: process.env.PORT || 8080,
  MONGODB_URL:
    process.env.MONGODB_URL ||
    "mongodb+srv://sreeharsha:mongodb@cluster0.aiglg.mongodb.net/sample?retryWrites=true&w=majority",
  JWT_SECRET: process.env.JWT_SECRET || "somethingsecret",
};
