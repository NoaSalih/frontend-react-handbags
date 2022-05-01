function Button({description, consoleLog, disabled}) {
    return (<>
        <button onClick={() => console.log({consoleLog})}
                disabled={disabled}>
            {description}
        </button>

    </>)

}

export default Button;