export interface Review {
  user: string;
  comment: string;
  rating: number;
}

export interface Movie {
  id: number;
  title: string;
  director: string;
  poster?: string;
  description: string;
  rating: number;
  reviews: Review[];
}
