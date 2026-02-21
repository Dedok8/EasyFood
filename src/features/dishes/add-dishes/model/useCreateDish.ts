import { useCreateDishMutation } from "@/entities/dishes/api/dishesApi";
import type { ICreateDish } from "@/features/dishes/add-dishes/types/interfaces";

export function useCreateDish() {
  const [createDish, { isLoading, isError }] = useCreateDishMutation();

  const handleCreateDish = async (dishData: ICreateDish) => {
    try {
      const result = await createDish(dishData).unwrap();
      console.log("Ресторан доданий:", result);
    } catch (error) {
      console.log("Failed create dish", error);
    }
  };

  return { handleCreateDish, isLoading, isError };
}
