import React, { useEffect, useState } from "react";

const MyApps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/app.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">All Apps</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {apps.map((app) => (
          <div
            key={app.id}
            className="card bg-base-100 shadow-md hover:shadow-xl transition p-4"
          >
            <figure className="h-48  bg-gray-50 flex items-center justify-center rounded-xl">
              <img
                src={app.image}
                alt={app.title}
                className="max-h-40 object-contain"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="font-semibold text-sm md:text-base">
                {app.title}
              </h3>
              <div className="flex justify-between items-center w-full mt-2 text-sm">
                <span className="flex items-center gap-1 text-success">
                  <i className="fa-solid fa-download"></i> {(app.downloads / 1_000_000).toFixed(1)}M
                </span>
                <span className="flex items-center gap-1 text-purple-500">
                  <i className="fa-solid fa-star"></i> {app.ratingAvg}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyApps;
