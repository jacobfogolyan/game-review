export interface Media {
  coverImage: string;
  images: string[];
  screenshots: string[];
  trailers: string[];
  videos: string[];
}

export interface Scores {
  critic: {
    score: number;
    reviewsCount: number;
    positive: number;
    mixed: number;
    negative: number;
  };
  user: {
    score: number;
    reviewsCount: number;
    positive: number;
    mixed: number;
    negative: number;
  };
}
