export interface IOrderItemDTO {
  dishId: string;
  quantity: number;
  notes?: string;
  sides?: string[];
}

export interface IOrderDTO {
  id: number | string;
  restaurantId: string;
  items: IOrderItemDTO[];
  deliveryAddress: string;
  paymentMethod: string;
  usePoints?: number;
  rewardCode?: string;
  createdAt: string;
}

export interface IOrdersResponseDTO {
  success: boolean;
  data: IOrderDTO[];
}
