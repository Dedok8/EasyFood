import { useFormDish } from "@/features/dishes/form-dishes/model/useFormDish";
import type { IUseFormDishesProps } from "@/features/dishes/form-dishes/types/interfaces";

function FormDish({ onSubmit, initialData, isLoading }: IUseFormDishesProps) {
  const { form, handleChange, handleSubmit } = useFormDish({
    onSubmit,
    initialData,
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-5"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium text-gray-600">
          Назва
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Enter name"
          className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="description"
          className="text-sm font-medium text-gray-600"
        >
          description
        </label>
        <input
          id="description"
          name="description"
          type="text"
          value={form.description}
          onChange={handleChange}
          required
          placeholder="description"
          className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="price" className="text-sm font-medium text-gray-600">
          price
        </label>
        <input
          id="price"
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          required
          placeholder="price"
          className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="imageUrl" className="text-sm font-medium text-gray-600">
          imageUrl
        </label>
        <input
          id="imageUrl"
          name="imageUrl"
          type="text"
          value={form.imageUrl ?? ""}
          onChange={handleChange}
          // required
          placeholder="imageUrl"
          className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="kcal" className="text-sm font-medium text-gray-600">
            kcal
          </label>
          <input
            id="kcal"
            name="kcal"
            type="number"
            value={form.kcal}
            onChange={handleChange}
            required
            placeholder="kcal"
            className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="weight" className="text-sm font-medium text-gray-600">
            weight
          </label>
          <input
            id="weight"
            name="weight"
            type="number"
            value={form.weight}
            onChange={handleChange}
            required
            placeholder="weight"
            className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="proteins"
            className="text-sm font-medium text-gray-600"
          >
            proteins
          </label>
          <input
            id="proteins"
            name="proteins"
            type="number"
            value={form.proteins}
            onChange={handleChange}
            required
            placeholder="proteins"
            className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="carbs" className="text-sm font-medium text-gray-600">
            carbs
          </label>
          <input
            id="carbs"
            name="carbs"
            type="number"
            value={form.carbs}
            onChange={handleChange}
            required
            placeholder="carbs"
            className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="fats" className="text-sm font-medium text-gray-600">
            fats
          </label>
          <input
            id="fats"
            name="fats"
            type="number"
            value={form.fats}
            onChange={handleChange}
            required
            placeholder="fats"
            className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="rating" className="text-sm font-medium text-gray-600">
            rating
          </label>
          <input
            id="rating"
            name="rating"
            type="rating"
            value={form.rating}
            onChange={handleChange}
            required
            placeholder="rating"
            className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
        <input
          id="rating"
          name="rating"
          type="number"
          step="0.1"
          min="0"
          max="5"
          value={form.rating}
          onChange={handleChange}
          required
          placeholder="0.0 - 5.0"
          className=""
        />
        <div className="flex flex-col gap-1">
          <label
            htmlFor="subcategoryId"
            className="text-sm font-medium text-gray-600"
          >
            subcategoryId
          </label>
          <input
            id="subcategoryId"
            name="subcategoryId"
            type="number"
            value={form.subcategoryId}
            onChange={handleChange}
            required
            placeholder="subcategoryId"
            className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            id="isAvailable"
            name="isAvailable"
            type="checkbox"
            checked={form.isAvailable}
            onChange={handleChange}
            className="w-4 h-4 accent-blue-600"
          />
          <label
            htmlFor="isAvailable"
            className="text-sm font-medium text-gray-600"
          >
            isAvailable
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Loading..." : "Додати блюдо"}
      </button>
    </form>
  );
}

export default FormDish;
