import { useState } from "react";

function App() {

  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const [loading, setLoading] = useState(false);


  const fetchQuote = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://dummyjson.com/quotes/random");

      const data = await response.json()
      console.log(data)

      setQuote(data.quote)
      setAuthor(data.author)
    } catch (error) {

    }finally{
      setLoading(false)
    }


  }



  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-6">
          Random Quote Generator
        </h1>

        <p className="text-lg text-gray-700">
          Click the button to get a random quote.
        </p>

        <button onClick={fetchQuote}  className="mt-6 px-6 py-3 bg-black text-white rounded-lg">
         {loading ? "Loading..." : "New Quote"}
        </button>
      </div>
    </div>
  );
}

export default App;