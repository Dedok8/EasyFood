export interface IOrderItemDTO {
  dishId: string;
  quantity: number;
  notes?: string;
  sides?: string[];
}

export interface IOrderDTO {
  restaurantId: string;
  items: IOrderItemDTO[];
  deliveryAddress: string;
  paymentMethod: string;
  usePoints?: number;
  rewardCode?: string;
}

export interface IOrderResponseDTO {
  id: number;
  createdAt: string;
  status: string;
  restaurantId: string;
  items: IOrderItemDTO[];
  deliveryAddress: string;
  paymentMethod: string;
}

export interface IOrdersResponseDTO {
  success: boolean;
  data: IOrderResponseDTO[];
}
