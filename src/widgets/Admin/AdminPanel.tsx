import CreateRestoran from "@/features/restorant/add-restorant/ui/CreateRestorant";

function AdminPanel() {
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
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
