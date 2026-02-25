import { useGetOrdersQuery } from "@/entities/orders/api/orderApi";

export function useGetOrders() {
  const { data: orders, isLoading, isError } = useGetOrdersQuery();

  return { orders, isLoading, isError };
}
