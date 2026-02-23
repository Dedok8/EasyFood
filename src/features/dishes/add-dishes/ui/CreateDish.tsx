import { useCreateDish } from "@/features/dishes/add-dishes/model/useCreateDish";
import type { ICreateDish } from "@/features/dishes/add-dishes/types/interfaces";
import FormDish from "@/features/dishes/form-dishes/ui/FormDish";
import { useAppSelector } from "@/shared/hooks/useSelector";

function CreateDish() {
  const restaurantId = useAppSelector(
    (state) => state.restaurant.selectedRestaurantId
  );
  const { handleCreateDish, isLoading, isError } = useCreateDish();

  const handleSubmit = (dishData: ICreateDish) => {
    if (!restaurantId) {
      console.error("Restaurant not selected");
      return;
    }
    handleCreateDish({ ...dishData, restaurantId });
  };

  if (isError) {
    console.error(isError);
    return null;
  }

  return <FormDish onSubmit={handleSubmit} isLoading={isLoading} />;
}

export default CreateDish;
