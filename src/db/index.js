import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constant.js";

const ConnectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(process.env.MONGODB_URI);
    console.log(
      `\n MongoDB conncected !! DB HOST: ${connectionInstance.connection.host} \n`
    );
  } catch (error) {
    console.log("MONGODB conncection Error: ", error);
    process.exit(1);
  }
};

export default ConnectDB;
