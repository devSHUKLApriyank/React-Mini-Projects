import React from 'react'

function App() {
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
          className='flex-1 border rounded-lg px-4 py-2 outline-none' 
          />
          <button className='bg-blue-500 text-white px-4 py-2 rounded-lg'>
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
