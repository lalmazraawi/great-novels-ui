import React from 'react'

const Input = (props) => {
    const { input, setInput } = props

    return (
        <div>
            <input
                type="text"
                name="input"
                value={input}
                onChange={(event) => { setInput(event.target.value) }}
            />
        </div>
    )
}

export default Input