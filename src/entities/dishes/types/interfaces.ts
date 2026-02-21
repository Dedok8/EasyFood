export interface IDish {
  id: number;
  restaurantId: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string | undefined;
  kcal: number;
  weight: number;
  proteins: number;
  carbs: number;
  fats: number;
  rating: string;
  subcategoryId: string;
  isAvailable: string;
}

export interface IDishReview {
  id: number;
  userId: number;
  rating: number;
  comment: string;
  createdAt: string;
}
