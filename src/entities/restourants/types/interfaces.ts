export interface IRestaurant {
  id: number;
  name: string;
  address: string;
  price: string;
  lat: string;
  lng: string;
  imageUrl: string;
  openHours: string;
  description: string;
  cuisineType: string;
}

export interface IRestaurantsResponse {
  data: IRestaurant[];
}
