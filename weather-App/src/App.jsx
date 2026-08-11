import React, { useState } from 'react'

function App() {

  const [city, setCity] = useState("")

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h1 className='text-3xl font-bold mb-6 text-center'>
          Weather App
        </h1>
        <div className='flex gap-2'>
          <input
            type='text'
            placeholder='Enter city name'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className='flex-1 border rounded-lg px-4 py-2 outline-none'
          />
          <button className='bg-blue-500 text-white px-4 py-2 rounded-lg'>
            Search
          </button>
        </div>
        <div className="text-center mt-8">

          <h2 className="text-2xl font-semibold">
            {city || "City Name"}
          </h2>

          <p className="text-6xl font-bold my-4">
            28°C
          </p>

          <p className="text-xl text-gray-500">
            Cloudy
          </p>

          <div className="flex justify-around mt-6">
            <div>
              <p className="text-gray-500">Humidity</p>
              <p className="font-bold">72%</p>
            </div>

            <div>
              <p className="text-gray-500">Wind</p>
              <p className="font-bold">12 km/h</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
