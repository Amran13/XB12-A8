import React, { useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopApp = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/app.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
    setLoading(false)
  }, []);

  const topApps = apps.slice(0, 8);

  return (
    <div>
      {
        loading ? <div className="loading loading-dots loading-lg ml-4"></div> : <div className="max-w-7xl mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Explore Trending Apps
          </h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {topApps.map((app) => (
              <Link key={app.id} to={`http://localhost:5173/my-apps/${app.id}`}>
                <div

                  className="card bg-base-100 shadow-md hover:shadow-xl transition p-4"
                >
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

          <div className="text-center mt-8">
            <Link to="/my-apps" className="btn btn-primary">
              Show More
            </Link>
          </div>
        </div>
      }
    </div>
  );
};

export default TopApp;
