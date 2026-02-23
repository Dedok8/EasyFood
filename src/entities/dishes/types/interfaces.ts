export interface IDish {
  id: number;
  restaurantId: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  kcal: number;
  weight: number;
  proteins: number;
  carbs: number;
  fats: number;
  rating: number;
  subcategoryId: number;
  isAvailable: boolean;
}

export interface IDishReview {
  id: number;
  userId: number;
  rating: number;
  comment: string;
  createdAt: string;
}
