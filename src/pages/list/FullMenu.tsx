import { useMenuRestaurant } from "@/entities/restourants/model/useMenuRestaurant";
import { useAppSelector } from "@/shared/hooks/useSelector";
import DishCart from "@/entities/dishes/ui/DishCard";
import DishesBasket from "@/widgets/DishesBasket/DishesBasket";

function FullMenu() {
  const selectedRestaurantId = useAppSelector(
    (state) => state.restaurant.selectedRestaurantId
  );

  const { dishes, isLoading, isError } = useMenuRestaurant();

  if (!selectedRestaurantId) return <div>Ресторан не обрано</div>;
  if (isLoading) return <div>Loading dishes...</div>;
  if (isError) return <div>Error loading dishes</div>;

  return (
    <div>
      {dishes.map((dish) => (
        <DishCart key={dish.id} dish={dish} />
      ))}
      <div>
        <DishesBasket />
      </div>
    </div>
  );
}

export default FullMenu;
