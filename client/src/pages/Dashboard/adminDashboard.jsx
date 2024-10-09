import Sidebar from '../../components/sidebar';

function adminDashboard() {
  return (
    <div className="min-h-screen flex">
    {/* Sidebar */}
    <Sidebar />

    {/* Main Content */}
    <div className="flex-1 bg-gray-100 p-6 md:ml-64">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      {/* Add your dashboard content here */}
      <div className="bg-white p-4 rounded shadow">
        <p>This is the main dashboard content.</p>
      </div>
    </div>
  </div>
  );
}

export default adminDashboard;
