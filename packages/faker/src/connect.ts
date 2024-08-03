import * as mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb://root:example@localhost:27017/game-reviewer?authSource=admin"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};
