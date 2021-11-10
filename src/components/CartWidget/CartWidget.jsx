import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import { useCartContext } from "../../context/cartContext";

const CartWidget = (Icon) => {
    
    const {cantidadItems, cartState} = useCartContext()

    return(
        <div 
            style={{fontSize:"50px", display:`${cartState}`}}
            className="align-items-center"
        >
            
            {cantidadItems}
            <FontAwesomeIcon className="ms-2"
                icon={faCartPlus}
                color="black"
                size="sm"/>
        </div>
        
    )
}

export default CartWidget
