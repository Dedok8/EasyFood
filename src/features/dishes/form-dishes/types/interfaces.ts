import type { IDish } from "@/entities/dishes/types/interfaces";
import type { ICreateDish } from "@/features/dishes/add-dishes/types/interfaces";

export interface IUseFormDishesProps {
  onSubmit: (data: ICreateDish) => void | Promise<void>;
  initialData?: Partial<IDish>;
  isLoading?: boolean;
}
