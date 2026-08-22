import { useState } from "react";

function App() {

  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)


  const fetchQuote = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch("https://dummyjson.com/quotes/random");

      const data = await response.json()
      console.log(data)

      setQuote(data.quote)
      setAuthor(data.author)

    } catch (error) {
      setError(true);
    } finally {

      setLoading(false)

    }
  }



  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-6">
          Random Quote Generator
        </h1>
        <p>{quote}</p>
         <p>{author}</p>

        <button 
        onClick={fetchQuote}
        disabled={loading}
         className="mt-6 px-6 py-3 bg-black text-white rounded-lg">
          {loading ? "Loading..." : "New Quote"}
        </button>
        <p>{error && "Something went wrong"}</p>
      </div>
    </div>
  );
}

export default App;