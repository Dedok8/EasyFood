import type { IRestaurant } from "@/entities/restourants/types/interfaces";
import type { ICreateRestoran } from "@/features/restorant/add-restorant/types/interfaces";

export interface IUseFormRestorantProps {
  onSubmit: (data: ICreateRestoran) => void | Promise<void>;
  initialData?: Partial<IRestaurant>;
  isLoading?: boolean;
}
