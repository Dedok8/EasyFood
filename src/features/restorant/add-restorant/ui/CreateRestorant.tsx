import { useCreateRestoran } from "@/features/restorant/add-restorant/model/useCreateRestoran";
import FormRestorant from "@/features/restorant/form-restorant/ui/FormRestorant";

function CreateRestoran() {
  const { handleCreateRestoran, isLoading, isError } = useCreateRestoran();

  if (isError) {
    console.error(isError);
    return null;
  }

  return (
    <FormRestorant onSubmit={handleCreateRestoran} isLoading={isLoading} />
  );
}

export default CreateRestoran;
