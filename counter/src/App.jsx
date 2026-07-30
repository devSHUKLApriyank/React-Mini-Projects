import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function increaseby5() {
    setCount(count + 5);
  }
  
  function decrease(){
    if(count > 0){
    setCount(count - 1)
    }
  }

function decreaseby5() {
  if(count > 5){
    setCount(count - 5);
  }
}

  function reset(){
    setCount(0)
  }

  
  
  return (
    <>
      <h1>Count: {count}</h1>

      {count >= 10 && (
    <p>Tu toh double digit mai pahuch gya lala 🎉</p>
       )}

      <button onClick={increase}>
        badha de bhai
      </button>

      <button onClick={increaseby5}>
         bhai 5 se badha na
      </button>

      <button onClick={decrease}>
        kum kare bhai
      </button>

      <button onClick={decreaseby5}>
        bhai 5 se kam kar na
      </button>

      <button onClick={reset}>
         reset kar de
      </button>
    </>
  );
}

export default App;