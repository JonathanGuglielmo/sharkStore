function isEmpty(field) {
    return field === ""
}

export function checkAllEmptyFields(fields) {

    let invalid = false

    fields.map((field) => {
        if(isEmpty(field)){
            invalid = true
        }
        return invalid
    })
    
}

export const generateForm = ({inputs, buttonText, onChange,onSubmit}) => {
    return(
        <form onSubmit={onSubmit}>
            {inputs.map((element) => <input key={element.name} name={element.name} value={element.value} onChange={onChange}/>)}
            <button type="submit">{buttonText}</button>
        </form>
    )
}

export function higherThanStock(cantidad,stock) {
    return cantidad >= stock 
}