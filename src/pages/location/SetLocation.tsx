import { setSelectedRestaurant } from "@/entities/restourants/api/model/resttorantsSlice";
import { useAllRestaurants } from "@/entities/restourants/model/useAllRestaurants";
import RestaurantsCard from "@/entities/restourants/ui/RestoranCard";
import { useAppDispatch, useAppSelector } from "@/shared/hook/useSelector";

function SetLocation() {
  const { restaurants, isLoading, isError } = useAllRestaurants();

  const dispatch = useAppDispatch();
  const selectedRestaurantId = useAppSelector(
    (state) => state.restaurant.selectedRestaurantId
  );

  if (isLoading) {
    return <div>Loading restaurants...</div>;
  }

  if (isError) {
    return <div className=" text-red-500">Error loading restaurants</div>;
  }

  const handleConfirm = () => {
    if (selectedRestaurantId) {
      console.log("Confirmed:", selectedRestaurantId);
    }
  };

  const allRestaurants = restaurants?.data ?? [];

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
        <div>
          {selectedRestaurantId && (
            <button onClick={handleConfirm}>Підтвердити</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SetLocation;
