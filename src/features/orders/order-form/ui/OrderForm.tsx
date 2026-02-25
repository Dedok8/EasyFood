import type { IDish } from "@/entities/dishes/types/interfaces";
import {
  addToCart,
  decrementFromCart,
  removeFromCart,
} from "@/entities/orders/api/model/cartSlice";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useSelector";

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
    <div className="flex items-center gap-5 p-5 bg-white rounded-3xl shadow-sm border border-gray-100">
      {/* Image */}
      <div className="relative flex-shrink-0">
        <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-50">
          <img
            src={dish.imageUrl}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 text-base leading-tight truncate">
          {dish.name}
        </h3>

        <div className="flex items-center gap-1 mt-1 text-sm text-yellow-500">
          ⭐ <span className="text-gray-500">{dish.rating} (120 reviews)</span>
        </div>

        <p className="text-orange-500 font-bold text-lg mt-2">
          $ {quantity > 0 ? totalPrice : Number(dish.price).toFixed(2)}
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3 flex-shrink-0">
        {quantity > 0 && (
          <>
            <button
              onClick={() => dispatch(decrementFromCart(dish.id))}
              className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 text-xl font-bold flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-200 active:scale-95"
            >
              −
            </button>

            <span className="w-6 text-center text-gray-800 font-semibold text-base">
              {quantity}
            </span>
          </>
        )}

        <button
          onClick={() => dispatch(addToCart(dish))}
          className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 text-xl font-bold flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-200 active:scale-95"
        >
          +
        </button>

        {quantity > 0 && (
          <button
            onClick={() => dispatch(removeFromCart(dish.id))}
            className="w-10 h-10 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center hover:bg-red-100 hover:text-red-500 transition-all duration-200 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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
