import type { IDish } from "@/entities/dishes/types/interfaces";
import {
  addToCart,
  decrementFromCart,
  removeFromCart,
} from "@/entities/orders/api/model/cartSlice";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useSelector";
import s from "./orderForm.module.scss";

export interface IOrderFormProps {
  dish: IDish;
}

function OrderForm({ dish }: IOrderFormProps) {
  const dispatch = useAppDispatch();

  const quantity = useAppSelector(
    (state) =>
      state.cart.items.find((i) => i.dish.id === dish.id)?.quantity ?? 0
  );

  const totalPrice = (Number(dish.price) * quantity).toFixed(2);

  return (
    <div className={s.item}>
      <div className={s.imageWrapper}>
        <div className={s.imageWrapper__img}>
          <img src={dish.imageUrl} alt={dish.name} />
        </div>
        {quantity > 0 && (
          <span className={s.imageWrapper__badge}>{quantity}</span>
        )}
      </div>

      <div className={s.info}>
        <h3 className={s.info__name}>{dish.name}</h3>
        <div className={s.info__rating}>
          <span>★</span>
          <span>{dish.rating}</span>
        </div>
        <p className={s.info__price}>
          ${quantity > 0 ? totalPrice : Number(dish.price).toFixed(2)}
        </p>
      </div>

      <div className={s.controls}>
        {quantity > 0 && (
          <>
            <button
              className={s.btnMinus}
              onClick={() => dispatch(decrementFromCart(dish.id))}
            >
              −
            </button>
            <span className={s.quantity}>{quantity}</span>
          </>
        )}

        <button
          className={s.btnPlus}
          onClick={() => dispatch(addToCart({ dish, quantity: 1 }))}
        >
          +
        </button>

        {quantity > 0 && (
          <button
            className={s.btnDelete}
            onClick={() => dispatch(removeFromCart(dish.id))}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14H6L5 6" />
              <path d="M10 11v6M14 11v6" />
              <path d="M9 6V4h6v2" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default OrderForm;
