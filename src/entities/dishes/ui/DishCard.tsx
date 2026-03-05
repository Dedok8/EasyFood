import type { RootState } from "@/app/store/types/storeTypes";
import type { IDish } from "@/entities/dishes/types/interfaces";
import {
  addToCart,
  decrementFromCart,
} from "@/entities/orders/api/model/cartSlice";
import DeleteBtnDish from "@/features/dishes/delete-dishes/ui/DeleteDishBtn";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useSelector";
import { DishModal } from "@/widgets/DishModal/DishModal";
import { useState } from "react";
import s from "./disCard.module.scss";

function DishCart({ dish }: { dish: IDish }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const user = useAppSelector((state: RootState) => state.auth.user);
  const isAdmin = !!user?.isAdmin;

  const quantity = useAppSelector(
    (state: RootState) =>
      state.cart.items.find((i) => i.dish.id === dish.id)?.quantity ?? 0
  );

  return (
    <>
      <div className={s.main}>
        <div className={s.card}>
          <div className={s.card__imageWrapper}>
            <div className={s.card__imageContainer}>
              <img
                src={dish.imageUrl}
                alt={dish.name}
                className={s.card__image}
              />
            </div>
            {quantity > 0 && <span className={s.card__badge}>{quantity}</span>}
          </div>

          <div className={s.content} onClick={() => setIsModalOpen(true)}>
            <h3 className={s.content__title}>{dish.name}</h3>
            <div className={s.content__rating}>
              <span className={s.content__star}>★</span>
              <span className={s.content__value}>{dish.rating}</span>
            </div>
            <p className={s.content__price}>${Number(dish.price).toFixed(2)}</p>
          </div>

          <div className={s.actions}>
            {quantity > 0 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(decrementFromCart(dish.id));
                  }}
                  className={s.actions__btnMinus}
                >
                  −
                </button>
                <span className={s.quantity}>{quantity}</span>
              </>
            )}

            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch(addToCart({ dish, quantity: 1 }));
              }}
              className={s.actions__btnPlus}
            >
              +
            </button>

            {isAdmin && (
              <div
                className={s.actions__adminAction}
                onClick={(e) => e.stopPropagation()}
              >
                <DeleteBtnDish dishId={dish.id} />
              </div>
            )}
          </div>
        </div>

        <DishModal
          dish={dish}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddToCart={(dish) => dispatch(addToCart({ dish, quantity: 1 }))}
        />
      </div>
    </>
  );
}

export default DishCart;
