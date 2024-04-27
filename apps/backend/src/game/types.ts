export interface Media {
  images: string[];
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
