import { useCreateDish } from "@/features/dishes/add-dishes/model/useCreateDish";

function CreateDish() {

  const {handleCreateDish, isLoading, isError} = useCreateDish()

    if (isError) {
    console.error(isError);
    return null;
  }
  
  return (  );
}

export default CreateDish;