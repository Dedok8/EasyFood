import { useDeleteDishMutation } from "@/entities/dishes/api/dishesApi";

export function useDeleteDish() {
  const [deleteDish, { isLoading, isError }] = useDeleteDishMutation();

  const handleDeleteDish = async (dishId: number) => {
    if (window.confirm("Бажаєте видалити блюдо?"))
      try {
        await deleteDish(dishId);
      } catch (error) {
        console.log(error);
      }
  };

  return { handleDeleteDish, isLoading, isError };
}
