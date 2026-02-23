export interface ICreateDish {
  restaurantId: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string | null;
  kcal: number;
  weight: number;
  proteins: number;
  carbs: number;
  fats: number;
  rating: number;
  subcategoryId: number;
  isAvailable: boolean;
}
