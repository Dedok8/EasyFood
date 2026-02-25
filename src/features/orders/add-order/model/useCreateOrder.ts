import { useCreateOrderMutation } from "@/entities/orders/api/orderApi";
import type { IOrderDTO } from "@/entities/orders/types/interfaces";

export function useCreateOrder(userId: number) {
  const [createOrder, { isLoading, isError }] = useCreateOrderMutation();

  const handleCreateOrder = async (orderData: IOrderDTO) => {
    if (!userId) return;
    try {
      const result = await createOrder({ userId, orderData }).unwrap();
      console.log("додано до замовлення", result);
    } catch (error) {
      console.log("Failed create order", error);
    }
  };

  return { handleCreateOrder, isLoading, isError };
}
