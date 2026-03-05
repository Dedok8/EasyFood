import { addToCart } from "@/entities/orders/api/model/cartSlice";
import { useAppDispatch } from "@/shared/hooks/useSelector";
import type { DishModalProps, Topping } from "@/widgets/DishModal/interfaces";
import { useEffect, useState } from "react";
import s from "./dishModal.module.scss";

export function DishModal({
  dish,
  isOpen,
  onClose,
  // onAddToCart,
}: DishModalProps) {
  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !dish) return null;

  const toggleTopping = (topping: Topping) => {
    setSelectedToppings((prev) =>
      prev.find((t) => t.id === topping.id)
        ? prev.filter((t) => t.id !== topping.id)
        : [...prev, topping]
    );
  };

  const totalPrice =
    (dish.price + selectedToppings.reduce((sum, t) => sum + t.price, 0)) *
    quantity;

  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <button className={s.close} onClick={onClose}>
          ×
        </button>

        <div className={s.rating}>
          <span>★</span>
          {dish.rating}
        </div>

        <div className={s.image}>
          <img src={dish.imageUrl} alt={dish.name} />
        </div>

        <div className={s.body}>
          <div className={s.titleRow}>
            <h2>{dish.name}</h2>
            <span className={s.price}>${dish.price}</span>
          </div>

          <p className={s.description}>{dish.description}</p>

          <div className={s.nutrition}>
            {[
              { label: "kcal", value: dish.kcal },
              { label: "grams", value: dish.weight },
              { label: "proteins", value: dish.proteins },
              { label: "carbs", value: dish.carbs },
              { label: "fats", value: dish.fats },
            ].map((n) => (
              <div key={n.label} className={s.nutritionItem}>
                <div className={s.nutritionValue}>{n.value}</div>
                <div className={s.nutritionLabel}>{n.label}</div>
              </div>
            ))}
          </div>

          <div className={s.section}>
            <h4>Ingredients</h4>
            <div className={s.ingredients}>
              {(dish.ingredients ?? []).map((ing) => (
                <div key={ing.name} className={s.ingredient}>
                  <div className={s.ingredientEmoji}>{ing.emoji}</div>
                  <span>{ing.name}</span>
                </div>
              ))}
            </div>
          </div>

          {(dish.toppings ?? []).length > 0 && (
            <div className={s.section}>
              <h4>Add toppings</h4>
              <div className={s.toppings}>
                {(dish.toppings ?? []).map((topping) => {
                  const checked = !!selectedToppings.find(
                    (t) => t.id === topping.id
                  );
                  return (
                    <label
                      key={topping.id}
                      className={`${s.toppingLabel} ${checked ? s.checked : ""}`}
                    >
                      <div className={s.toppingLeft}>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleTopping(topping)}
                        />
                        <div className={s.checkmark} />
                        <span>{topping.name}</span>
                      </div>
                      <span className={s.toppingPrice}>+${topping.price}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          <div className={s.actions}>
            <div className={s.counter}>
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                −
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>
            <button
              className={s.addBtn}
              onClick={() => {
                // onAddToCart(dish, selectedToppings);
                onClose();
                dispatch(addToCart({ dish, quantity }));
              }}
            >
              Add to order ${totalPrice}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
