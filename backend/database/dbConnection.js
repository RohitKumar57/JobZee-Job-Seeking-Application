import mongoose from "mongoose";

export const dbConnection = () => {
  console.log(process.env.MONGO_URI);
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "CAREER_CATALYST",
    })
    .then(() => {
      console.log(`DATABASE CONNECTED`);
    })
    .catch((err) => {
      console.log(`ERROR CONNECTING DATABASE`);
      console.log(err);
    });
};
