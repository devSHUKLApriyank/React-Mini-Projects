import React from 'react'
import { useState } from 'react'
import Button from './Button'


const Counter = () => {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    function increaseBy5() {
        setCount(count + 5);
    }
    function reset() {
        setCount(0);
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
            <div className="bg-slate-800 p-8 rounded-2xl shadow-xl w-96">
                <h1 className="text-5xl font-bold text-center text-white">Count: {count}</h1>
                <div className=" grid grid-cols-2 gap-4 mt-8">
                <Button text="+1" onClick={increase} color="bg-green-500" />
                <Button text="-1" onClick={decrease} color="bg-red-500" />
                <Button text="+5" onClick={increaseBy5} color="bg-yellow-500" />
                <Button text="Reset" onClick={reset} color="bg-purple-500" />
                </div>
            </div>
        </div>
    )
}

export default Counter
