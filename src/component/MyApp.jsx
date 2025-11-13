import React, { useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyApps = () => {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/app.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);


  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h2 className="text-2xl font-bold mb-4 sm:mb-0">
          (<span className="text-purple-600">{filteredApps.length}</span>) app found
        </h2>
        <input
          type="text"
          placeholder="Search apps..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full sm:w-72"
        />
      </div>

      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredApps.map((app) => (
            <Link key={app.id} to={`/my-apps/${app.id}`}>
              <div className="card bg-base-100 shadow-md hover:shadow-xl transition p-4">
                <figure className="h-48 bg-gray-50 flex items-center justify-center rounded-xl">
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
                    <div className="flex items-center">
                      <FaDownload />
                      <span className="flex items-center gap-1 text-success">
                        <i className="fa-solid fa-download"></i> {(app.downloads / 1_000_000).toFixed(1)}M
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaStar />
                      <span className="flex items-center gap-1 text-purple-500">
                        <i className="fa-solid fa-star"></i> {app.ratingAvg}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-12">
          No app found
        </p>
      )}
    </div>
  );
};

export default MyApps;
