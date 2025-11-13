import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { toast, Toaster } from "react-hot-toast";

const MyAppDetails = () => {
    const { id } = useParams();
    const [app, setApp] = useState(null);
    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        fetch("/app.json")
            .then(res => res.json())
            .then(data => {
                const selectedApp = data.find(item => item.id === parseInt(id));
                setApp(selectedApp);
                const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
                setInstalled(stored.some(a => a.id === selectedApp.id));
            });
    }, [id]);

    
    const handleInstall = () => {
        const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
        if (!stored.some(a => a.id === app.id)) {
            stored.push(app);
            localStorage.setItem("installedApps", JSON.stringify(stored));
            setInstalled(true);
            toast.success(`${app.title} installed successfully`);
        }
    };

    if (!app) return <p className="text-center mt-20 text-lg">Loading...</p>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
           
            <div className="grid md:grid-cols-3 gap-8 items-center border-b border-purple-300 pb-6">
                <div className="flex justify-center">
                    <img src={app.image} alt={app.title} className="w-48 h-48 rounded-2xl shadow-lg object-cover" />
                </div>
                <div className="md:col-span-2 space-y-3">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{app.title}</h1>
                    <p className="text-gray-600">By <span className="text-purple-600 font-semibold">{app.companyName}</span></p>
                    <div className="flex flex-wrap gap-8 mt-4 text-gray-700">
                        <div><p className="font-bold text-lg">{(app.downloads / 1_000_000).toFixed(1)}M</p><p className="text-sm text-gray-500">Downloads</p></div>
                        <div><p className="font-bold text-lg">{app.ratingAvg.toFixed(1)}</p><p className="text-sm text-gray-500">Average Rating</p></div>
                        <div><p className="font-bold text-lg">{app.reviews.toLocaleString()}</p><p className="text-sm text-gray-500">Total Reviews</p></div>
                    </div>
                    <button
                        disabled={installed}
                        onClick={handleInstall}
                        className={`btn mt-4 text-white ${installed ? "bg-gray-400 cursor-not-allowed" : "bg-linear-to-r from-green-400 to-cyan-500"}`}
                    >
                        {installed ? "Installed" : `Install Now (${app.size}MB)`}
                    </button>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Ratings</h2>
                <div className="bg-white p-6 rounded-lg shadow">
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart layout="vertical" data={app.ratings} margin={{ top: 5, right: 30, left: 60, bottom: 5 }}>
                            <XAxis type="number" /><YAxis type="category" dataKey="name" /><Tooltip /><Bar dataKey="count" fill="#00E6B3" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="mt-10 border-t border-gray-300 pt-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Description</h2>
                <p className="text-gray-600 leading-relaxed">{app.description}</p>
            </div>
        </div>
    );
};

export default MyAppDetails;
