import { useGetRestaurantsQuery } from "@/entities/restourants/api/restorantsApi";

export function useAllRestaurants() {
  const { data, isLoading, isError } = useGetRestaurantsQuery();

  return { restaurants: data, isLoading, isError };
}
