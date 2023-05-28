export type Burger = {
  id: string;
  name: string;
  description: string;
  restaurantId: string;
};

export type Author = {
  name: string;
  userId: string;
};

export type RatingRange = 0 | 1 | 2 | 3 | 4 | 5;

export type Rating = {
  taste: RatingRange;
  texture: RatingRange;
  visual: RatingRange;
};

export type Review = {
  author: Author;
  rating: Rating;
  headline: string;
  comment: string;
};

export type Reviews = {
  id: string;
  name: string;
  reviews: Review[];
};

export type Restaurant = {
  id: string;
  name: string;
  type: "diner" | "restaurant" | "cafe" | "cafeteria";
};
