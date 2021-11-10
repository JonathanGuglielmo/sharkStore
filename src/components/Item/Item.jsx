import React from "react";
import { Link } from "react-router-dom";

import "./Item.css"

const Item = ({id, nombre, stock, img, price }) => {

  
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 miItem">
      <div className="card miCard">
      <Link to={`/productos/${id}`}><img src={img} className="card-img-top" alt="..." /></Link>
        <div className="card-body">
          <h3 className="card-title text-center">{nombre}</h3>
          <p className="text-center text-dark h4">${price}</p>
          <p className="text-center text-dark m-0">Disponibles: {stock}</p> 
        </div>
        <Link className="btn btn-info btn-ver-producto" to={`/productos/${id}`}>Ver producto</Link>
      </div>
    </div>
  );
};

export default Item;
