import { useGetRestorantsDishesQuery } from "@/entities/restourants/api/restorantsApi";
import { useAppSelector } from "@/shared/hook/useSelector";

export function useMenuRestaurant() {
  const selectedRestaurantId = useAppSelector(
    (state) => state.restaurant.selectedRestaurantId
  );

  const { data, isLoading, isError } = useGetRestorantsDishesQuery(
    { restaurantId: selectedRestaurantId! },
    { skip: !selectedRestaurantId }
  );

  return { dishes: data?.data ?? [], isLoading, isError };
}
