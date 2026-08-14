import { useState } from "react";

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null)

  const searchWeather = async () => {
    //ye fetch waali line ka mtlb h kii isse URL pe request bhejo aur response aane tak wait karo
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4344d713083072f384d0faab164fdc1e&units=metric`
    );

    const data = await response.json();//jo response mila h usko json mai convert karo

    setWeather(data)
  };

  return (
    <div>

      <input
        value={city}
        onChange={(e) => setCity(e.target.value)} placeholder="enter city name"
      />

      <button onClick={searchWeather}>
        Search
      </button>
      <div>
        <p>
          <h2>{weather?.name}</h2>

          <p>{weather?.main?.temp}°C</p>

          <p>{weather?.weather?.[0]?.main}</p>

          <p>{weather?.main?.humidity}%</p>

          <p>{weather?.wind?.speed} km/h</p>
        </p>
      </div>

    </div>
  );
}

export default App;