import type { FormEvent, ChangeEvent } from "react";
import { useState } from "react";

import type { ICreateDish } from "@/features/dishes/add-dishes/types/interfaces";
import type { IUseFormDishesProps } from "@/features/dishes/form-dishes/types/interfaces";

export function useFormDishes({ onSubmit, initialData }: IUseFormDishesProps) {
  const [form, setForm] = useState<ICreateDish>({
    restaurantId: initialData?.restaurantId ?? 0,
    name: initialData?.name ?? "",
    description: initialData?.description ?? "",
    price: initialData?.price ?? 0,
    imageUrl: initialData?.imageUrl ?? null,
    kcal: initialData?.kcal ?? 0,
    weight: initialData?.weight ?? 0,
    proteins: initialData?.proteins ?? 0,
    carbs: initialData?.carbs ?? 0,
    fats: initialData?.fats ?? 0,
    rating: initialData?.rating ?? "",
    subcategoryId: initialData?.subcategoryId ?? "",
    isAvailable: initialData?.isAvailable ?? "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    const numberFields = [
      "price",
      "kcal",
      "weight",
      "proteins",
      "carbs",
      "fats",
    ];

    setForm((prev) => ({
      ...prev,
      [name]: numberFields.includes(name) ? Number(value) : value,
    }));
  };

  const onClear = () => {
    setForm({
      restaurantId: 0,
      name: "",
      description: "",
      price: 0,
      imageUrl: null,
      kcal: 0,
      weight: 0,
      proteins: 0,
      carbs: 0,
      fats: 0,
      rating: "",
      subcategoryId: "",
      isAvailable: "",
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await onSubmit(form);
      onClear();
    } catch (error) {
      console.error("Error submitting dish form:", error);
    }
  };

  return {
    form,
    setForm,
    handleChange,
    handleSubmit,
    onClear,
  };
}
