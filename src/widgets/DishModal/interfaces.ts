import type { IDish } from "@/entities/dishes/types/interfaces";

export interface Topping {
  id: number;
  name: string;
  price: number;
}

export interface Ingredient {
  name: string;
  emoji: string;
}

export interface IDishFull extends IDish {
  ingredients?: Ingredient[];
  toppings?: Topping[];
}

export interface DishModalProps {
  dish: IDishFull | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (dish: IDishFull, toppings: Topping[]) => void;
}
