import { setSelectedRestaurant } from "@/entities/restourants/api/model/resttorantsSlice";
import { useAllRestaurants } from "@/entities/restourants/model/useAllRestaurants";
import RestaurantsCard from "@/entities/restourants/ui/RestoranCard";
import { FRONT_ROUTES } from "@/shared/config/routes/frontRoutes";
import { createSlug } from "@/shared/hooks/useRouterSlug";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useSelector";
import { useNavigate } from "react-router";

function SetLocation() {
  const { restaurants, isLoading, isError } = useAllRestaurants();
  const dispatch = useAppDispatch();
  const selectedRestaurantId = useAppSelector(
    (state) => state.restaurant.selectedRestaurantId
  );
  const navigate = useNavigate();

  const allRestaurants = restaurants?.data ?? [];

  const handleConfirm = () => {
    if (!selectedRestaurantId) return;

    const restaurant = allRestaurants.find(
      (r) => r.id === selectedRestaurantId
    );
    if (!restaurant) return;

    const slug = createSlug(restaurant.name);
    navigate(FRONT_ROUTES.pages.FullMenu.navigationPath(slug));
  };

  if (isLoading) return <div>Loading restaurants...</div>;
  if (isError)
    return <div className="text-red-500">Error loading restaurants</div>;

  return (
    <div>
      {allRestaurants.map((restaurant) => (
        <RestaurantsCard
          key={restaurant.id}
          restoran={restaurant}
          isSelected={selectedRestaurantId === restaurant.id}
          onSelect={(id) => dispatch(setSelectedRestaurant(id))}
        />
      ))}
      <div>
        {selectedRestaurantId && (
          <button onClick={handleConfirm}>Підтвердити</button>
        )}
      </div>
    </div>
  );
}

export default SetLocation;
