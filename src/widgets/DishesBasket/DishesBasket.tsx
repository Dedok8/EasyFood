import OrderForm from "@/features/orders/order-form/ui/OrderForm";
import { useAppSelector } from "@/shared/hooks/useSelector";

function DishesBasket() {
  const cartItems = useAppSelector((state) => state.cart.items);

  if (!cartItems.length)
    return <p className="text-gray-400 text-center p-5">Корзина пуста</p>;

  return (
    <div className="flex flex-col gap-3">
      {cartItems.map((item) => (
        <OrderForm key={item.dish.id} dish={item.dish} />
      ))}
    </div>
  );
}

export default DishesBasket;
