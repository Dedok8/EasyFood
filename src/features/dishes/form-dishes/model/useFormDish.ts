import type { FormEvent, ChangeEvent } from "react";
import { useState } from "react";

import type { ICreateDish } from "@/features/dishes/add-dishes/types/interfaces";
import type { IUseFormDishesProps } from "@/features/dishes/form-dishes/types/interfaces";

export function useFormDish({ onSubmit, initialData }: IUseFormDishesProps) {
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
    rating: initialData?.rating ?? 0,
    subcategoryId: initialData?.subcategoryId ?? 0,
    isAvailable: initialData?.isAvailable ?? false,
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
      "rating",
      "subcategoryId",
    ];
    setForm((prev) => ({
      ...prev,
      [name]: numberFields.includes(name)
        ? Number(value)
        : name === "isAvailable"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const onClear = () => {
    setForm({
      restaurantId: 0,
      name: "",
      description: "",
      price: 0,
      imageUrl: "",
      kcal: 0,
      weight: 0,
      proteins: 0,
      carbs: 0,
      fats: 0,
      rating: 0,
      subcategoryId: 0,
      isAvailable: false,
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
