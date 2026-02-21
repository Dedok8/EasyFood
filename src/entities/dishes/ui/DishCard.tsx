import type { IDish } from "@/entities/dishes/types/interfaces";

interface Props {
  dish: IDish;
  onAdd: (dish: IDish) => void;
}

function DishCart({ dish, onAdd }: Props) {
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
        <p className="text-orange-500 font-semibold mt-1">
          $ {dish.price.toFixed(2)}
        </p>
      </div>

      <button
        onClick={() => onAdd(dish)}
        className="w-9 h-9 rounded-full bg-orange-100 text-orange-500 text-xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
      >
        +
      </button>
    </div>
  );
}

export default DishCart;
