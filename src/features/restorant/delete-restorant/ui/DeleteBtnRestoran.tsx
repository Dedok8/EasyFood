import { useDeleteBtnRestoran } from "@/features/restorant/delete-restorant/model/useDeleterestoran";
import type { IDeleteBtnResoranProps } from "@/features/restorant/delete-restorant/types/interfaces";

function DeleteBtnRestauran({ restoranId }: IDeleteBtnResoranProps) {
  const { handleDeleteRestoran, isLoading, isError } = useDeleteBtnRestoran();
  if (isError) {
    console.log("помилка видалення", isError);
  }
  return (
    <div>
      <button
        onClick={() => handleDeleteRestoran(restoranId)}
        disabled={isLoading}
      >
        {isLoading ? "Видалення..." : "Видалити"}
      </button>
    </div>
  );
}

export default DeleteBtnRestauran;
