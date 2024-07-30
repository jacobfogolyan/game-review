import * as mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import { UserDocument, User } from "./schemas";

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb://root:example@localhost:27017/game-reviewer?authSource=admin"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

connect();

const permissionGroups = ["guest", "author", "admin", "reviewer"];

// pick random word
function getRandomWord<T>(randomArray: Array<T>): T | undefined {
  const randomIndex = Math.floor(Math.random() * randomArray.length);
  return randomArray[randomIndex];
}

const generateUsers = (num: number): UserDocument[] => {
  const users: UserDocument[] = [];

  for (let i = 0; i < num; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const username = faker.internet.userName();
    const password = faker.internet.password();
    const email = faker.internet.email();

    const permissions = [getRandomWord(permissionGroups)];

    users.push({
      firstName,
      lastName,
      username,
      password,
      email,
      permissions,
    } as UserDocument);
  }

  return users;
};

const allUsers = generateUsers(50);

User.insertMany(allUsers)
  .then((docs) =>
    console.log(`${docs.length} users have been inserted into the database.`)
  )
  .catch((err) => {
    console.error(err);
    console.error(
      `${
        err.writeErrors?.length ?? 0
      } errors occurred during the insertMany operation.`
    );
  });
