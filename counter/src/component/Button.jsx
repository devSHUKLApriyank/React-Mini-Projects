import React from 'react'
import { useState } from 'react'


const Button = ({ text, onClick, color }) => {
    return (
        <div>
            <button className={`${color} w-full text-white px-5 py-2 rounded-lg font-semibold transition-all `} onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

export default Button
