import { useDeleteRestorantMutation } from "@/entities/restourants/api/restorantsApi";

export function useDeleteBtnRestoran() {
  const [deleteRestoran, { isLoading, isError }] = useDeleteRestorantMutation();

  const handleDeleteRestoran = async (restoranId: number) => {
    if (window.confirm("Бажаєте видалити ресторан?"))
      try {
        await deleteRestoran(restoranId);
      } catch (error) {
        console.log(error);
      }
  };

  return { handleDeleteRestoran, isLoading, isError };
}
