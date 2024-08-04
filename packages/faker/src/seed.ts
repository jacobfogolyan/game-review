import { faker } from "@faker-js/faker";
import { User, Article, Game, Review } from "./schemas";

import type {
  ArticleDocument,
  GameDocument,
  UserDocument,
  ReviewDocument,
  Media,
} from "./schemas";
import { connect as connectToDb } from "./connect";
import { generateObjects, getRandomStrings } from "./helpers";
import mongoose from "mongoose";

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

type GeneratedObject = {
  [key: string]: any;
};

const userTemplate = (): GeneratedObject => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  username: faker.internet.userName(),
  password: faker.internet.password(),
  email: faker.internet.email(),
  permissions: getRandomStrings(permissionGroups, 2),
});

const articleTemplate = (
  userIds: mongoose.Types.ObjectId[],
  gameIds: mongoose.Types.ObjectId[]
): ArticleDocument => {
  const user = getRandomStrings<mongoose.Types.ObjectId>(userIds, 1)[0];
  const game = getRandomStrings<mongoose.Types.ObjectId>(gameIds, 1)[0];

  if (!user) {
    throw new Error("User not defined");
  }

  if (!game) {
    throw new Error("User not defined");
  }

  const article = new Article({
    title: faker.lorem.words(3),
    description: faker.lorem.paragraph(),
    releaseDate: faker.date.past(),
    genres: [faker.lorem.word(), faker.lorem.word()],
    platforms: getRandomStrings(consoleGroups, 2),
    permissions: getRandomStrings(permissionGroups, 2),
    user,
    game,
  });

  return article;
};

const generateUsers = (num: number): UserDocument[] => {
  const users: UserDocument[] = [];

  for (let i = 0; i < num; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const username = `${firstName}_${lastName}`;
    const password = faker.internet.password();
    const email = faker.internet.email();

    const permissions = getRandomStrings(permissionGroups, 2);

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

const generateArticles = (
  num: number,
  userIds: mongoose.Types.ObjectId[],
  gameIds: mongoose.Types.ObjectId[]
): ArticleDocument[] => {
  const articles: ArticleDocument[] = [];

  for (let i = 0; i < num; i++) {
    const title = faker.lorem.words(3);
    const description = faker.lorem.paragraph();
    const releaseDate = faker.date.past();
    const genres = [faker.lorem.word(), faker.lorem.word()];
    const platforms = [faker.lorem.word(), faker.lorem.word()];
    const permissions = getRandomStrings(permissionGroups, 2);
    const user = getRandomStrings<mongoose.Types.ObjectId>(userIds, 1)[0];
    const game = getRandomStrings<mongoose.Types.ObjectId>(gameIds, 1)[0];

    articles.push({
      title,
      description,
      releaseDate,
      genres,
      platforms,
      permissions,
      user,
      game,
    } as ArticleDocument);
  }

  return articles;
};

const generateGames = (nums: number) => {
  const games: GameDocument[] = [];

  for (let i = 0; i < nums; i++) {
    const title = faker.lorem.words(3);
    const name = faker.lorem.words(3);
    const description = faker.lorem.paragraph();
    const developer = faker.lorem.paragraph();
    const publisher = faker.lorem.word();
    const releaseDate = faker.date.past();
    const genres = [faker.lorem.word(), faker.lorem.word()];
    const platforms = getRandomStrings(consoleGroups, 2);
    const media: Media = {
      coverImage: faker.image.url(),
      images: [faker.image.url(), faker.image.url()],
      screenshots: [faker.image.url(), faker.image.url()],
      trailers: [faker.image.url(), faker.image.url()],
      videos: [faker.image.url(), faker.image.url()],
    };

    //TODO: score functionality
    const scores = {};

    games.push({
      title,
      name,
      description,
      developer,
      publisher,
      releaseDate,
      genres,
      platforms,
      media,
      scores,
    } as GameDocument);
  }
  return games;
};

const generateReviews = (
  nums: number,
  authorIds: mongoose.Types.ObjectId[],
  gameIds: mongoose.Types.ObjectId[]
) => {
  const reviews: ReviewDocument[] = [];

  for (let i = 0; i < nums; i++) {
    const title = faker.lorem.words(3);
    const description = faker.lorem.paragraph();
    const media: Media = {
      coverImage: faker.image.url(),
      images: [faker.image.url(), faker.image.url()],
      screenshots: [faker.image.url(), faker.image.url()],
      trailers: [faker.image.url(), faker.image.url()],
      videos: [faker.image.url(), faker.image.url()],
    };

    const gameId = getRandomStrings<mongoose.Types.ObjectId>(gameIds, 1)[0];
    const author = getRandomStrings<mongoose.Types.ObjectId>(authorIds, 1)[0];

    const updatedAt = faker.date.recent();
    const postedAt = faker.date.past();

    reviews.push({
      title,
      description,
      media,
      gameId,
      author,
      updatedAt,
      postedAt,
    } as ReviewDocument);
  }
  return reviews;
};

const seedDatabase = async () => {
  try {
    connectToDb();
    const users = generateUsers(5);
    const insertedUsers = await User.insertMany(users);
    const userIds: mongoose.Types.ObjectId[] = insertedUsers.map(
      (user: UserDocument) => user._id
    );

    const games = generateGames(10);
    const insertedGames = await Game.insertMany(games);
    const gameIds: mongoose.Types.ObjectId[] = insertedGames.map(
      (game) => game._id
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
      (article) => article._id
    );
    await Article.insertMany(articles);

    const reviews = generateReviews(100, authorIds, gameIds);
    await Review.insertMany(reviews);
  } catch (error) {
    console.error(error);
  }
};

seedDatabase();
