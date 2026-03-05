import { useAllRestaurants } from "@/entities/restourants/model/useAllRestaurants";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useSelector";
import { setSelectedRestaurant } from "@/entities/restourants/api/model/resttorantsSlice";
import { FRONT_ROUTES } from "@/shared/config/routes/frontRoutes";
import { useNavigate } from "react-router";
import RestaurantsCard from "@/entities/restourants/ui/RestoranCard";
import HeaderComp from "@/shared/ui/headerComp/HeaderComp";
import s from "./setloacation.module.scss";
export default function SetLocation() {
  const dispatch = useAppDispatch();
  const selectedRestaurantId = useAppSelector(
    (state) => state.restaurant.selectedRestaurantId
  );
  const { restaurants, isLoading, isError } = useAllRestaurants();
  const navigate = useNavigate();

  const allRestaurants = restaurants?.data ?? [];

  const handleConfirm = () => {
    if (!selectedRestaurantId) return;
    navigate(FRONT_ROUTES.pages.FullMenu.navigationPath);
  };

  if (isLoading) return <div>Loading restaurants...</div>;
  if (isError)
    return <div className="text-red-500">Error loading restaurants</div>;

  return (
    <div>
      <HeaderComp locationName={"Set Location"} label={"Food menu"} />

      <div className={s.location}>
        <div className={s["location__container--title"]}>
          <h2 className={s.location__title}>
            Restaurants based on your selected location
          </h2>
          <p className={s.location__description}>
            Please enter your location or allow access to your location to find
            all restaurants that are near you{" "}
          </p>
        </div>
      </div>
      <div className={s["restaurant__comp"]}>
        {allRestaurants.map((r) => (
          <RestaurantsCard
            key={r.id}
            restoran={r}
            isSelected={r.id === selectedRestaurantId}
            onSelect={(id) => dispatch(setSelectedRestaurant(id))}
          />
        ))}

        {selectedRestaurantId && (
          <div>
            <button
              onClick={handleConfirm}
              className={s["restaurant__comp--btn"]}
            >
              Підтвердити
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
