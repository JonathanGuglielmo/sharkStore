import React, { useState } from 'react'
import {checkAllEmptyFields, generateForm} from '../../helpers'

const Events = () => {

    const [state, setState] = useState({
        name:"",
        email:"",
        pasword:""
    })
    
    const {name, email, pasword} = state;

    let data = [
        {name:"email", value:email},
        {name:"pasword", value:pasword},
        {name:"name", value:name},

    ];

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        if(checkAllEmptyFields([name,email,pasword])) {
            alert("hay un campo vacio")
        }
    }

    return (
        <div>
            {generateForm({inputs:data,buttonText:"enviar",onChange:handleChange,onSubmit:handleClick})}
        </div>
    )
}

export default Events
