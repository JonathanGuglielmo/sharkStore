import React from 'react'
import { useParams } from 'react-router';

import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';

function ItemListContainer({greeting}) {

    let {category} = useParams();


    
    
    return (
        <div className="div-ItemListContainer">
            <h2>{greeting}</h2>
            <div className="container-fluid">
            <ItemList category={category}/>
            </div>
        </div>
    )
}

export default ItemListContainer
