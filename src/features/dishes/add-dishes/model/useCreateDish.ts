import { useCreateDishMutation } from "@/entities/dishes/api/dishesApi";
import type { ICreateDish } from "@/features/dishes/add-dishes/types/interfaces";

export function useCreateDish() {
  const [createDish, { isLoading, isError }] = useCreateDishMutation();

  const handleCreateDish = async (dishData: ICreateDish) => {
    try {
      const result = await createDish(dishData).unwrap();
      console.log("Страва додана:", result);
    } catch (error: unknown) {
      const err = error as { data?: unknown };
      console.log("Failed create dish", error);
      console.log("Error details:", JSON.stringify(err?.data, null, 2));
    }
  };

  return { handleCreateDish, isLoading, isError };
}
