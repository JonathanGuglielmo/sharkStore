import React from "react";
import { Link } from "react-router-dom";

import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({id, nombre, img, descripcion, precio, stock}) => {
  
  return (
    <div className="ItemDetail row d-flex align-items-center">
      <div className="col-lg-6 col-md-6 col-sm-12 divImg">
        <img src={img} alt="..." />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 divText">
        <h3>{nombre}</h3>
        <p className="w-50">Descripcion:<br/>{descripcion}</p>
        <p>${precio}</p>
        <p>Disponibles: {stock}</p>
      </div>
      <div className="ItemCountDiv w-50 m-auto">
        <ItemCount initial={1} stock={stock} nombre={nombre} img={img} precio={precio} id={id}/>
      </div>      
      <Link className="d-block text-center mt-5" to="/">
        <button className="btn btn-primary">volver</button>
      </Link>
    </div>
  );
};

export default ItemDetail;
