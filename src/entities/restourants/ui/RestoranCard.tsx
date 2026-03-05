import type { RootState } from "@/app/store/types/storeTypes";
import type { IRestaurant } from "@/entities/restourants/types/interfaces";
import DeleteBtnRestauran from "@/features/restorant/delete-restorant/ui/DeleteBtnRestoran";
import { useSelector } from "react-redux";
import s from "./restaurantCard.module.scss";

interface Props {
  restoran: IRestaurant;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

function RestaurantsCard({ restoran, isSelected, onSelect }: Props) {
  const user = useSelector((state: RootState) => state.auth.user);
  const isAdmin = !!user?.isAdmin;

  return (
    <div
      className={`${s.card} ${isSelected ? s.selected : ""}`}
      onClick={() => onSelect(restoran.id)}
    >
      <div className={s.card__imageWrapper}>
        <img
          src={restoran.imageUrl || "/placeholder-restaurant.jpg"}
          alt={restoran.name}
        />
      </div>

      <div className={s.card__info}>
        <h3 className={s.card__name}>{restoran.name}</h3>
        <p className={s.card__address}>{restoran.address}</p>
      </div>

      <div className={s.card__actions}>
        <div className={`${s.card__radio} ${isSelected ? s.active : ""}`} />
        {isAdmin && (
          <div onClick={(e) => e.stopPropagation()}>
            <DeleteBtnRestauran restoranId={restoran.id} />
          </div>
        )}
      </div>
    </div>
  );
}

export default RestaurantsCard;
