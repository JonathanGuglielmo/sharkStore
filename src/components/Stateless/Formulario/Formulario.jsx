import React from 'react'

const Formulario = ({onSubmit , inputs, buttonText, onChange}) => {
    return (
        <form onSubmit={onSubmit}>
            {inputs.map((element) => <input key={element.name} name={element.name} value={element.value} onChange={onChange}/>)}
            <button type="submit">{buttonText}</button>
        </form>
    )
}

export default Formulario
