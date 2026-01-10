export interface IDish {
  id: number;
  restaurantId: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  kcal: string;
  weight: string;
  proteins: string;
  carbs: string;
  fats: string;
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
