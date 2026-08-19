import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const searchWeather = async () => {
    if (city.trim() === "") {
      setWeather(null);
      setError("Please enter a city");
      return;
    }

    setLoading(true);
    setWeather(null);
    setError(null);

    try {
      const response = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
);

      if (!response.ok) {
        setError("City not found");
        return;
      }

      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError("Network Error");
      console.error("Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-6">
          Weather App
        </h1>

        {/* Search */}
        <div className="flex gap-2">

          <input
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchWeather();
              }
            }}
          />

          <button
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 disabled:bg-blue-300"
            disabled={loading}
            onClick={searchWeather}
          >
            {loading ? "Loading..." : "Search"}
          </button>

        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-500 mt-6">
            Loading...
          </p>
        )}

        {/* Error */}
        {error && (
          <p className="text-center text-red-500 mt-6">
            {error}
          </p>
        )}

        {/* Weather */}
        {weather && !loading && (
          <div className="mt-6 text-center">

            <h2 className="text-2xl font-bold">
              {weather?.name}
            </h2>

            <p className="text-5xl font-bold mt-3">
              {weather?.main?.temp}°C
            </p>

            <p className="text-lg text-gray-500 mt-2">
              {weather?.weather?.[0]?.main}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">

              <div className="bg-slate-100 rounded-xl p-4">
                <p className="text-gray-500">Humidity</p>
                <p className="text-xl font-semibold">
                  {weather?.main?.humidity}%
                </p>
              </div>

              <div className="bg-slate-100 rounded-xl p-4">
                <p className="text-gray-500">Wind</p>
                <p className="text-xl font-semibold">
                  {weather?.wind?.speed} km/h
                </p>
              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default App;