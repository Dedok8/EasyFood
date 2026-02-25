import { useAllRestaurants } from "@/entities/restourants/model/useAllRestaurants";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useSelector";
import { setSelectedRestaurant } from "@/entities/restourants/api/model/resttorantsSlice";
import { FRONT_ROUTES } from "@/shared/config/routes/frontRoutes";
import { useNavigate } from "react-router";
import RestaurantsCard from "@/entities/restourants/ui/RestoranCard";

export default function SetLocation() {
  const dispatch = useAppDispatch();
  const selectedRestaurantId = useAppSelector(
    (state) => state.restaurant.selectedRestaurantId
  );
  const { restaurants, isLoading, isError } = useAllRestaurants();
  const navigate = useNavigate();

  const allRestaurants = restaurants?.data ?? [];

  const handleConfirm = () => {
    if (!selectedRestaurantId) return;
    navigate(FRONT_ROUTES.pages.FullMenu.navigationPath);
  };

  if (isLoading) return <div>Loading restaurants...</div>;
  if (isError)
    return <div className="text-red-500">Error loading restaurants</div>;

  return (
    <div>
      {allRestaurants.map((r) => (
        <RestaurantsCard
          key={r.id}
          restoran={r}
          isSelected={r.id === selectedRestaurantId}
          onSelect={(id) => dispatch(setSelectedRestaurant(id))}
        />
      ))}
      {selectedRestaurantId && (
        <button onClick={handleConfirm}>Підтвердити</button>
      )}
    </div>
  );
}
