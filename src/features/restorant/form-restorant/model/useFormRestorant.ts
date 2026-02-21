import type { ICreateRestoran } from "@/features/restorant/add-restorant/types/interfaces";
import type { IUseFormRestorantProps } from "@/features/restorant/form-restorant/types/interfaces";
import { useState, type FormEvent } from "react";

export function useFormRestorant({
  onSubmit,
  initialData,
}: IUseFormRestorantProps) {
  const [form, setForm] = useState<ICreateRestoran>({
    name: initialData?.name ?? "",
    address: initialData?.address ?? "",
    price: initialData?.price ?? 0,
    lat: initialData?.lat ?? 0,
    lng: initialData?.lng ?? 0,
    imageUrl: initialData?.imageUrl ?? "",
    openHours: initialData?.openHours ?? "",
    description: initialData?.description ?? "",
    cuisineType: initialData?.cuisineType ?? "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "price" || name === "lat" || name === "lng"
          ? Number(value)
          : value,
    }));
  };

  const onClear = () => {
    setForm({
      name: "",
      address: "",
      price: 0,
      lat: 0,
      lng: 0,
      imageUrl: "",
      openHours: "",
      description: "",
      cuisineType: "",
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (onSubmit) {
      try {
        await onSubmit(form);
        onClear();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
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
