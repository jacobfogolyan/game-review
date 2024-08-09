import { faker } from "@faker-js/faker";
import mongoose from "mongoose";

import { User, Article, Game, Review } from "./schemas";
import type {
  ArticleDocument,
  GameDocument,
  UserDocument,
  ReviewDocument,
} from "./schemas";
import { connect as connectToDb } from "./connect";
import { getRandomStrings } from "./helpers";

const permissionGroups = ["guest", "author", "reviewer"];
const consoleGroups = [
  "PlayStation 5",
  "PlayStation 5 Slim",
  "Xbox Series X",
  "Xbox Series S",
  "Nintendo Switch",
  "Nintendo Switch Lite",
  "Steam Deck",
  "Asus ROG Ally",
];

const generateUsers = (num: number): UserDocument[] =>
  Array.from({ length: num }, () => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    username: `${faker.person.firstName()}_${faker.person.lastName()}`,
    password: faker.internet.password(),
    email: faker.internet.email(),
    permissions: getRandomStrings(permissionGroups, 2),
  })) as UserDocument[];

const generateArticles = (
  num: number,
  userIds: mongoose.Types.ObjectId[],
  gameIds: mongoose.Types.ObjectId[],
): ArticleDocument[] =>
  Array.from({ length: num }, () => ({
    title: faker.lorem.words(3),
    description: faker.lorem.paragraph(),
    releaseDate: faker.date.past(),
    genres: [faker.lorem.word(), faker.lorem.word()],
    platforms: getRandomStrings(consoleGroups, 2),
    permissions: getRandomStrings(permissionGroups, 2),
    user: getRandomStrings(userIds, 1)[0],
    game: getRandomStrings(gameIds, 1)[0],
  })) as ArticleDocument[];

const generateGames = (num: number): GameDocument[] =>
  Array.from({ length: num }, () => ({
    title: faker.lorem.words(3),
    name: faker.lorem.words(3),
    description: faker.lorem.paragraph(),
    developer: faker.lorem.paragraph(),
    publisher: faker.lorem.word(),
    releaseDate: faker.date.past(),
    genres: [faker.lorem.word(), faker.lorem.word()],
    platforms: getRandomStrings(consoleGroups, 2),
    media: {
      coverImage: faker.image.url(),
      images: [faker.image.url(), faker.image.url()],
      screenshots: [faker.image.url(), faker.image.url()],
      trailers: [faker.image.url(), faker.image.url()],
      videos: [faker.image.url(), faker.image.url()],
    },
    scores: {},
  })) as GameDocument[];

const generateReviews = (
  num: number,
  authorIds: mongoose.Types.ObjectId[],
  gameIds: mongoose.Types.ObjectId[],
): ReviewDocument[] =>
  Array.from({ length: num }, () => ({
    title: faker.lorem.words(3),
    description: faker.lorem.paragraph(),
    media: {
      coverImage: faker.image.url(),
      images: [faker.image.url(), faker.image.url()],
      screenshots: [faker.image.url(), faker.image.url()],
      trailers: [faker.image.url(), faker.image.url()],
      videos: [faker.image.url(), faker.image.url()],
    },
    gameId: getRandomStrings(gameIds, 1)[0],
    author: getRandomStrings(authorIds, 1)[0],
    updatedAt: faker.date.recent(),
    postedAt: faker.date.past(),
  })) as ReviewDocument[];

const seedDatabase = async () => {
  try {
    await connectToDb();
    const users = generateUsers(5);
    const insertedUsers = await User.insertMany(users);
    const userIds: mongoose.Types.ObjectId[] = insertedUsers.map(
      (user: UserDocument) => user._id,
    );

    const games = generateGames(10);
    const insertedGames = await Game.insertMany(games);
    const gameIds: mongoose.Types.ObjectId[] = insertedGames.map(
      (game) => game._id,
    );

    const getAuthors: UserDocument[] = await User.find({
      permissions: {
        $in: ["author"],
      },
    })
      .select("_id")
      .exec();
    const authorIds = getAuthors.map((author) => author._id);

    const articles = generateArticles(100, authorIds, gameIds);
    const insertedArticles = await Article.insertMany(articles);
    const articleIds: mongoose.Types.ObjectId[] = insertedArticles.map(
      (article) => article._id,
    );
    await Article.insertMany(articles);

    const reviews = generateReviews(100, authorIds, gameIds);
    await Review.insertMany(reviews);
  } catch (error) {
    console.error(error);
  }
};

seedDatabase();
