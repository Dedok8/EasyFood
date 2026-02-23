import { useAllRestaurants } from "@/entities/restourants/model/useAllRestaurants";
import { useMenuRestaurant } from "@/entities/restourants/model/useMenuRestaurant";
import { setSelectedRestaurant } from "@/entities/restourants/api/model/resttorantsSlice";
import { createSlug } from "@/shared/hooks/useRouterSlug";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useSelector";
import { useEffect } from "react";
import { useParams } from "react-router";
import DishCart from "@/entities/dishes/ui/DishCard";

function FullMenu() {
  const { restaurantSlug } = useParams<{ restaurantSlug: string }>();
  const dispatch = useAppDispatch();

  const { restaurants } = useAllRestaurants();
  const selectedRestaurantId = useAppSelector(
    (state) => state.restaurant.selectedRestaurantId
  );

  useEffect(() => {
    if (!selectedRestaurantId && restaurants?.data) {
      const restaurant = restaurants.data.find(
        (r) => createSlug(r.name) === restaurantSlug
      );
      if (restaurant) {
        dispatch(setSelectedRestaurant(restaurant.id));
      }
    }
  }, [restaurants, restaurantSlug, selectedRestaurantId, dispatch]);

  const { dishes, isLoading, isError } = useMenuRestaurant();

  if (isLoading) return <div>Loading dishes...</div>;
  if (isError) return <div>Error loading dishes</div>;

  return (
    <div>
      {dishes.map((dish) => (
        <DishCart key={dish.id} dish={dish} />
      ))}
    </div>
  );
}

export default FullMenu;
