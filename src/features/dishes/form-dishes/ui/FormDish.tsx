import { useFormDish } from "@/features/dishes/form-dishes/model/useFormDish";
import type { IUseFormDishesProps } from "@/features/dishes/form-dishes/types/interfaces";
import s from "./formDish.module.scss";

function FormDish({ onSubmit, initialData, isLoading }: IUseFormDishesProps) {
  const { form, handleChange, handleSubmit } = useFormDish({
    onSubmit,
    initialData,
  });
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.field}>
        <label htmlFor="name">Назва</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Enter name"
        />
      </div>
      <div className={s.field}>
        <label htmlFor="description">description</label>
        <input
          id="description"
          name="description"
          type="text"
          value={form.description}
          onChange={handleChange}
          required
          placeholder="description"
        />
      </div>
      <div className={s.field}>
        <label htmlFor="price">price</label>
        <input
          id="price"
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          required
          placeholder="price"
        />
      </div>
      <div className={s.field}>
        <label htmlFor="imageUrl">imageUrl</label>
        <input
          id="imageUrl"
          name="imageUrl"
          type="text"
          value={form.imageUrl ?? ""}
          onChange={handleChange}
          placeholder="imageUrl"
        />
      </div>

      <div className={s.grid}>
        <div className={s.field}>
          <label htmlFor="kcal">kcal</label>
          <input
            id="kcal"
            name="kcal"
            type="number"
            value={form.kcal}
            onChange={handleChange}
            required
            placeholder="kcal"
          />
        </div>
        <div className={s.field}>
          <label htmlFor="weight">weight</label>
          <input
            id="weight"
            name="weight"
            type="number"
            value={form.weight}
            onChange={handleChange}
            required
            placeholder="weight"
          />
        </div>
        <div className={s.field}>
          <label htmlFor="proteins">proteins</label>
          <input
            id="proteins"
            name="proteins"
            type="number"
            value={form.proteins}
            onChange={handleChange}
            required
            placeholder="proteins"
          />
        </div>
        <div className={s.field}>
          <label htmlFor="carbs">carbs</label>
          <input
            id="carbs"
            name="carbs"
            type="number"
            value={form.carbs}
            onChange={handleChange}
            required
            placeholder="carbs"
          />
        </div>
        <div className={s.field}>
          <label htmlFor="fats">fats</label>
          <input
            id="fats"
            name="fats"
            type="number"
            value={form.fats}
            onChange={handleChange}
            required
            placeholder="fats"
          />
        </div>
        <div className={s.field}>
          <label htmlFor="rating">rating</label>
          <input
            id="rating"
            name="rating"
            type="rating"
            value={form.rating}
            onChange={handleChange}
            required
            placeholder="rating"
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
        />
        <div className={s.field}>
          <label htmlFor="subcategoryId">subcategoryId</label>
          <input
            id="subcategoryId"
            name="subcategoryId"
            type="number"
            value={form.subcategoryId}
            onChange={handleChange}
            required
            placeholder="subcategoryId"
          />
        </div>

        <div className={s.checkbox}>
          <input
            id="isAvailable"
            name="isAvailable"
            type="checkbox"
            checked={form.isAvailable}
            onChange={handleChange}
          />
          <label htmlFor="isAvailable">isAvailable</label>
        </div>
      </div>

      <button className={s.submit} type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Додати блюдо"}
      </button>
    </form>
  );
}

export default FormDish;
