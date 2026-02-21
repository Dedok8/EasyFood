import { useCreateRestorantsMutation } from "@/entities/restourants/api/restorantsApi";
import type { ICreateRestoran } from "@/features/restorant/add-restorant/types/interfaces";

export function useCreateRestoran() {
  const [createRestoran, { isLoading, isError }] =
    useCreateRestorantsMutation();

  const handleCreateRestoran = async (restoranData: ICreateRestoran) => {
    try {
      const result = await createRestoran(restoranData).unwrap();
      console.log("Ресторан доданий:", result);
    } catch (error) {
      console.log("Failed create restorant", error);
    }
  };

  return { handleCreateRestoran, isLoading, isError };
}
