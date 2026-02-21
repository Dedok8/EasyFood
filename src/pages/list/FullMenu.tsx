import { useMenuRestaurant } from "@/entities/restourants/model/useMenuRestaurant";

function FullMenu() {
  const { dishes, isLoading, isError } = useMenuRestaurant();

  if (isLoading) {
    return <div>Loading dishes...</div>;
  }
  if (isError) {
    return <div>Error loading dishes</div>;
  }

  return (
    <div>
      {dishes.map((dish) => (
        <div key={dish.id}> {dish.name}</div>
      ))}
    </div>
  );
}

export default FullMenu;
