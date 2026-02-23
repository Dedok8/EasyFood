import type { RootState } from "@/app/store/store";
import { addToCart } from "@/entities/dishes/api/model/cartSlice";
import type { IDish } from "@/entities/dishes/types/interfaces";
import DeleteBtnDish from "@/features/dishes/delete-dishes/ui/DeleteDishBtn";
import { useAppDispatch } from "@/shared/hooks/useSelector";
import { useSelector } from "react-redux";

function DishCart({ dish }: { dish: IDish }) {
  const dispatch = useAppDispatch();

  const user = useSelector((state: RootState) => state.auth.user);

  const isAdmin = !!user?.isAdmin;

  const handleAdd = () => {
    dispatch(addToCart(dish));
  };
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
      <img
        src={dish.imageUrl}
        alt={dish.name}
        className="w-16 h-16 rounded-full object-cover"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{dish.name}</h3>
        <div className="flex items-center gap-1 text-sm text-yellow-500">
          ⭐ <span>{dish.rating}</span>
          {/* <span className="text-gray-400">({dish.reviewsCount} reviews)</span> */}
        </div>
        <p className="text-orange-500 font-semibold mt-1">$ {dish.price}</p>
      </div>

      <button
        onClick={handleAdd}
        className="w-9 h-9 rounded-full bg-orange-100 text-orange-500 text-xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
      >
        +
      </button>

      {isAdmin && <DeleteBtnDish dishId={dish.id} />}
    </div>
  );
}

export default DishCart;
