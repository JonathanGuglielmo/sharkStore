import React from 'react'

import './Home.css'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

const home = ({greeting}) => {
    return (
        <div className="divHome">
            <ItemListContainer greeting={greeting}/>
        </div>
    )
}

export default home
