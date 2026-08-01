function Button({text, color, onClick}) {
    return(
        <button>
            {text}{color}{onClick}
        </button>
    )
}

export default Button