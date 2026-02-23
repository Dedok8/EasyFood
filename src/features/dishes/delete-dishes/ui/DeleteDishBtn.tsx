import { useDeleteDish } from "@/features/dishes/delete-dishes/model/useDeleteDish";
import type { IDeleteDishProps } from "@/features/dishes/delete-dishes/types/interfaces";

function DeleteBtnDish({ dishId }: IDeleteDishProps) {
  const { handleDeleteDish, isLoading, isError } = useDeleteDish();

  if (isError) {
    console.log("помилка видалення", isError);
  }

  return (
    <div>
      <button onClick={() => handleDeleteDish(dishId)} disabled={isLoading}>
        {" "}
        {isLoading ? "Видалення..." : "Видалити"}
      </button>
    </div>
  );
}

export default DeleteBtnDish;
