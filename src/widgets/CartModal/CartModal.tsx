import { useAppDispatch, useAppSelector } from "@/shared/hooks/useSelector";
import { clearCart } from "@/entities/orders/api/model/cartSlice";
import type { RootState } from "@/app/store/types/storeTypes";
import { useEffect } from "react";
import { X, Trash2, ShoppingBag } from "lucide-react";
import OrderForm from "@/features/orders/order-form/ui/OrderForm";
import s from "./cardModal.module.scss";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout?: () => void;
}

export function CartModal({ isOpen, onClose, onCheckout }: CartModalProps) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.dish.price) * item.quantity,
    0
  );
  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <div className={s.header}>
          <div className={s.header__info}>
            <h2>My Order</h2>
            <p>
              {totalCount} {totalCount === 1 ? "item" : "items"}
            </p>
          </div>
          <div className={s.header__actions}>
            {cartItems.length > 0 && (
              <button
                className={s.clearBtn}
                onClick={() => dispatch(clearCart())}
              >
                <Trash2 size={13} />
                Clear all
              </button>
            )}
            <button className={s.closeBtn} onClick={onClose}>
              <X size={16} />
            </button>
          </div>
        </div>

        <div className={s.body}>
          {cartItems.length === 0 ? (
            <div className={s.empty}>
              <div className={s.empty__icon}>
                <ShoppingBag size={28} />
              </div>
              <p>Your order is empty</p>
              <p>Add dishes from the menu</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <OrderForm key={item.dish.id} dish={item.dish} />
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className={s.footer}>
            <div className={s.total}>
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
            <button
              className={s.checkoutBtn}
              onClick={() => {
                onCheckout?.();
                onClose();
              }}
            >
              Checkout — ${totalPrice}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
