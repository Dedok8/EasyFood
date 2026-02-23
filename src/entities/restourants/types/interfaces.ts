import type { IDish } from "@/entities/dishes/types/interfaces";

export interface IRestaurant {
  id: number;
  name: string;
  address: string;
  price: number;
  lat: number;
  lng: number;
  imageUrl: string;
  openHours: string;
  description: string;
  cuisineType: string;
}

export interface IRestaurantsResponse {
  data: IRestaurant[];
}

export interface IDishesResponse {
  data: IDish[];
}
