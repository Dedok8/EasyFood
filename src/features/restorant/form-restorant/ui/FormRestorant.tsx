import { useFormRestorant } from "@/features/restorant/form-restorant/model/useFormRestorant";
import type { IUseFormRestorantProps } from "@/features/restorant/form-restorant/types/interfaces";

function FormRestorant({
  onSubmit,
  initialData,
  isLoading,
}: IUseFormRestorantProps) {
  const { form, handleChange, handleSubmit } = useFormRestorant({
    onSubmit,
    initialData,
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg"
    >
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gray-700"
        >
          Restaurant Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          placeholder="Enter restaurant name"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="address"
          className="block text-sm font-semibold text-gray-700"
        >
          Address *
        </label>
        <input
          id="address"
          name="address"
          type="text"
          value={form.address}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          placeholder="Enter address"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="price"
            className="block text-sm font-semibold text-gray-700"
          >
            Price Level (1-4) *
          </label>
          <input
            id="price"
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            required
            min="1"
            max="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="cuisineType"
            className="block text-sm font-semibold text-gray-700"
          >
            Cuisine Type *
          </label>
          <input
            id="cuisineType"
            name="cuisineType"
            type="text"
            value={form.cuisineType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="e.g., Italian, Japanese"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="lat"
            className="block text-sm font-semibold text-gray-700"
          >
            Latitude *
          </label>
          <input
            id="lat"
            name="lat"
            type="number"
            value={form.lat}
            onChange={handleChange}
            required
            step="any"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="e.g., 40.7128"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="lng"
            className="block text-sm font-semibold text-gray-700"
          >
            Longitude *
          </label>
          <input
            id="lng"
            name="lng"
            type="number"
            value={form.lng}
            onChange={handleChange}
            required
            step="any"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="e.g., -74.0060"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="imageUrl"
          className="block text-sm font-semibold text-gray-700"
        >
          Image URL
        </label>
        <input
          id="imageUrl"
          name="imageUrl"
          type="url"
          value={form.imageUrl}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="openHours"
          className="block text-sm font-semibold text-gray-700"
        >
          Opening Hours
        </label>
        <input
          id="openHours"
          name="openHours"
          type="text"
          value={form.openHours}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          placeholder="e.g., Mon-Fri: 9AM-10PM"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="description"
          className="block text-sm font-semibold text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
          placeholder="Enter restaurant description"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Loading..." : "Додати ресторан"}
      </button>
    </form>
  );
}

export default FormRestorant;
