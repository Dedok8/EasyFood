import type { RootState } from "@/app/store/types/storeTypes";
import { setSelectedRestaurant } from "@/entities/restourants/api/model/resttorantsSlice";
import { useAllRestaurants } from "@/entities/restourants/model/useAllRestaurants";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useSelector";
import type { HeaderCompProps } from "@/shared/ui/headerComp/types";
import { useState } from "react";
import { ShoppingCart, MapPin } from "lucide-react";
import { CartModal } from "@/widgets/CartModal/CartModal";
import s from "./headerComp.module.scss";

function HeaderComp({ locationName, label }: HeaderCompProps) {
  const dispatch = useAppDispatch();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const selectedRestaurantId = useAppSelector(
    (state: RootState) => state.restaurant.selectedRestaurantId
  );
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const { restaurants } = useAllRestaurants();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const restaurantId = Number(e.target.value);
    const restaurant = restaurants?.data.find((r) => r.id === restaurantId);
    if (restaurant) {
      dispatch(setSelectedRestaurant(restaurant.id));
    }
  };

  return (
    <>
      <div className={s.header}>
        <div className={s.header__title}>
          <h1>{label}</h1>
          <h2>{locationName}</h2>
        </div>

        <div className={s.header__menu}>
          <div className={s["header__menu--section"]}>
            <MapPin size={14} />
            <select
              className={s.header__select}
              value={selectedRestaurantId || ""}
              onChange={handleChange}
            >
              <option value="">Оберіть ресторан</option>
              {restaurants?.data.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
            {/* <ChevronDown size={14} /> */}
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className={s["header__menu--section-btn"]}
          >
            <div>
              <ShoppingCart size={15} />
            </div>
            <span>My Order</span>
            {totalCount > 0 && (
              <span className={s["header__menu--section-btn--count"]}>
                {totalCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={() => {
          // dispatch(createOrder(...)) або navigate до сторінки оформлення
          console.log("Checkout!");
        }}
      />
    </>
  );
}

export default HeaderComp;
