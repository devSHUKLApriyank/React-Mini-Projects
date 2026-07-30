import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function increase() {
    setCount(count + 5);
  }
  function increase() {
    setCount(count - 5);
  }

  function decrease(){
    setCount(count - 1)
  }

  function reset(){
    setCount(0)
  }


  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={increase}>
        badha de bhai
      </button>
      <button onClick={decrease}>
        kum kare bhai
      </button>
      <button onClick={reset}>
         reset kar de
      </button>
    </>
  );
}

export default App;