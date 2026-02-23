import { setSelectedRestaurant } from "@/entities/restourants/api/model/resttorantsSlice";
import { useAllRestaurants } from "@/entities/restourants/model/useAllRestaurants";
import CreateDish from "@/features/dishes/add-dishes/ui/CreateDish";
import CreateRestoran from "@/features/restorant/add-restorant/ui/CreateRestorant";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useSelector";

function AdminPanel() {
  const dispatch = useAppDispatch();
  const selectedRestaurantId = useAppSelector(
    (state) => state.restaurant.selectedRestaurantId
  );
  const { restaurants } = useAllRestaurants();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Panel</h1>

          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">USERS</h2>
            <p className="text-gray-600">User management coming soon...</p>
          </div>

          <div className="bg-gray-100 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              RESTAURANTS
            </h2>
            <CreateRestoran />
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">MENU</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Оберіть ресторан
              </label>
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full max-w-xs"
                value={selectedRestaurantId ?? ""}
                onChange={(e) =>
                  dispatch(setSelectedRestaurant(Number(e.target.value)))
                }
              >
                <option value="" disabled>
                  -- оберіть ресторан --
                </option>
                {restaurants?.data.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>

            {selectedRestaurantId && <CreateDish />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
