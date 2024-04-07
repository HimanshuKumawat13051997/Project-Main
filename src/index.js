import ConnectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({
  path: "../.env",
});

ConnectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`App is listening on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB Connection Failed: ", err);
  });
//**********First Approach(Basic Approach) */

// import express from "express";
// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error: ", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error: ", error);
//     throw err;
//   }
// })();

//*********************************************** */
