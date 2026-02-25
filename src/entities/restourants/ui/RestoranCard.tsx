import type { RootState } from "@/app/store/types/storeTypes";
import type { IRestaurant } from "@/entities/restourants/types/interfaces";
import DeleteBtnRestauran from "@/features/restorant/delete-restorant/ui/DeleteBtnRestoran";
import { useSelector } from "react-redux";

interface Props {
  restoran: IRestaurant;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

function RestaurantsCard({ restoran, isSelected, onSelect }: Props) {
  const user = useSelector((state: RootState) => state.auth.user);
  console.log("DISPATCH ID:", restoran.id);
  const isAdmin = !!user?.isAdmin;

  return (
    <div onClick={() => onSelect(restoran.id)}>
      <div>
        <img
          src={restoran.imageUrl || "/placeholder-restaurant.jpg"}
          alt={restoran.name}
        />
      </div>
      <div>
        <h3>{restoran.name}</h3>
        <p>{restoran.address}</p>
      </div>
      <div>
        <div
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
            isSelected ? "border-orange-500" : "border-gray-300"
          }`}
        >
          {isSelected && <div className="w-3 h-3 rounded-full bg-orange-500" />}
        </div>
        {isAdmin && (
          // <div onClick={(e) => e.stopPropagation()}>
          <DeleteBtnRestauran restoranId={restoran.id} />
          // </div>
        )}
      </div>
    </div>
  );
}

export default RestaurantsCard;
