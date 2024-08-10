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

const generateDocuments = <T extends mongoose.Document>(
  model: mongoose.Model<T>,
  num: number,
  generateFields: () => Partial<T>,
): T[] => {
  const documents: T[] = [];
  for (let i = 0; i < num; i++) {
    const document = new model(generateFields());
    documents.push(document);
  }
  return documents;
};

const generateUsers = (num: number): UserDocument[] =>
  generateDocuments(User, num, () => ({
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    username: `${faker.person.firstName()}_${faker.person.lastName()}`,
    password: faker.internet.password(),
    email: faker.internet.email(),
    permissions: getRandomStrings(permissionGroups, 2),
  }));

const generateArticles = (
  num: number,
  userIds: mongoose.Types.ObjectId[],
  gameIds: mongoose.Types.ObjectId[],
): ArticleDocument[] =>
  generateDocuments(Article, num, () => ({
    title: faker.lorem.words(3),
    description: faker.lorem.paragraph(),
    releaseDate: faker.date.past(),
    genres: [faker.lorem.word(), faker.lorem.word()],
    platforms: getRandomStrings(consoleGroups, 2),
    permissions: getRandomStrings(permissionGroups, 2),
    user: getRandomStrings(userIds, 1)[0],
    game: getRandomStrings(gameIds, 1)[0],
  }));

const generateGames = (num: number): GameDocument[] =>
  generateDocuments(Game, num, () => ({
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
  }));

const generateReviews = (
  num: number,
  authorIds: mongoose.Types.ObjectId[],
  gameIds: mongoose.Types.ObjectId[],
): ReviewDocument[] =>
  generateDocuments(Review, num, () => ({
    description: faker.lorem.paragraph(),
    title: faker.lorem.words(3),
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
  }));

const seedUsers = async (count: number) => {
  const users = generateUsers(count);
  await User.insertMany(users);
};

const seedGames = async (count: number) => {
  const games = generateGames(count);
  const insertedGames = await Game.insertMany(games);
  return insertedGames.map((game) => game._id);
};

const getAuthorIds = async (): Promise<mongoose.Types.ObjectId[]> => {
  const authors = await User.find({ permissions: { $in: ["author"] } })
    .select("_id")
    .exec();
  return authors.map((author) => author._id);
};

const seedArticles = async (
  count: number,
  authorIds: mongoose.Types.ObjectId[],
  gameIds: mongoose.Types.ObjectId[],
) => {
  const articles = generateArticles(count, authorIds, gameIds);
  await Article.insertMany(articles);
};

const seedReviews = async (
  count: number,
  authorIds: mongoose.Types.ObjectId[],
  gameIds: mongoose.Types.ObjectId[],
) => {
  const reviews = generateReviews(count, authorIds, gameIds);
  await Review.insertMany(reviews);
};

const seedDatabase = async () => {
  try {
    await connectToDb();

    await seedUsers(5);

    const [gameIds, authorIds] = await Promise.all([
      seedGames(10),
      getAuthorIds(),
    ]);

    await Promise.all([
      seedArticles(100, authorIds, gameIds),
      seedReviews(100, authorIds, gameIds),
    ]);
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};
seedDatabase();
