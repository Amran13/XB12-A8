import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("High-Low");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(stored);
  }, []);
  
  const handleUninstall = (id) => {
    const updated = installedApps.filter(app => app.id !== id);
    setInstalledApps(updated);
    toast.success("App uninstalled successfully");
    localStorage.setItem("installedApps", JSON.stringify(updated));
  };
  
  const sortedApps = [...installedApps].sort((a, b) => 
    sortOrder === "High-Low" ? b.downloads - a.downloads : a.downloads - b.downloads
);

  if (!installedApps.length) return <p className="text-center mt-20 text-lg">No Installed Apps</p>;

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Installed Apps</h2>
        <select 
          className="select select-bordered"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          >
          <option>High-Low</option>
          <option>Low-High</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedApps.map(app => (
          <div key={app.id} className="card bg-base-100 shadow-md hover:shadow-xl transition p-4">
            <figure className="h-40 bg-gray-50 flex items-center justify-center rounded-xl">
              <img src={app.image} alt={app.title} className="max-h-32 object-contain" />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="font-semibold text-base">{app.title}</h3>
              <p className="text-sm text-gray-500">{(app.downloads/1_000_000).toFixed(1)}M Downloads</p>
              <button onClick={() => handleUninstall(app.id)} className="btn btn-error text-white mt-2">Uninstall</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyInstallation;
