import React, { useState, useEffect, memo } from "react";
import {gsap} from 'gsap';
import { Link } from "react-router-dom";
import { getFirestore } from "../../services/getFirebase";

import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = memo(
  ({ category }) => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const timeline = gsap.timeline()

    useEffect (() => {
      const mov1 = document.querySelector(".filtrar");
      timeline.from(mov1, {opacity: 0, x: 50, duration:3});
  }, []);

    useEffect(() => {
      if (category) {
        const db = getFirestore();
        db.collection("items")
          .where("categoryId", "==", category)
          .get()
          .then((resp) =>
            setItems(resp.docs.map((it) => ({ id: it.id, ...it.data() })))
          )
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      } else {
        const db = getFirestore();
        db.collection("items")
          .get() //traigo toda la coleccion
          .then((resp) =>
            setItems(resp.docs.map((it) => ({ id: it.id, ...it.data() })))
          )
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      }
    }, [category]);

    return (
      <div className="mt-3">
        <div className="text-center d-flex align-items-center justify-content-center row div-filtros">
          <p className="filtrar">Filtrar productos</p>
          <ul className="justify-content-center ul-productos">
            <li>
              <Link to={`/`} className="text-dark m-4">
                <u>Todos</u>
              </Link>
            </li>
            <li>
              <Link to={`/categorias/placas`} className="text-dark m-4">
                <u>Placas</u>
              </Link>
            </li>
            <li>
              <Link to={`/categorias/memorias`} className="text-dark m-4">
                <u>Memorias</u>
              </Link>
            </li>
            <li>
              <Link to={`/categorias/motherboard`} className="text-dark m-4">
                <u>Motherboard</u>
              </Link>
            </li>
            <li>
              <Link to={`/categorias/perisfericos`} className="text-dark m-4">
                <u>Perisfericos</u>
              </Link>
            </li>
          </ul>
        </div>
        <div className="row justify-content-center mi-div-item">
          {loading ? (
            <div>
              <p className="text-dark text-center w-100">
                Cargando productos...
              </p>
              <div
                className="text-center d-flex align-items-center justify-content-center"
                style={{ height: "80vh" }}
              >
                <div className="spinner-grow text-dark" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          ) : (
            items.map((items) => (
              <Item
                id={items.id}
                nombre={items.title}
                stock={items.stock}
                img={items.image}
                price={items.price}
                descripcion={items.descripcion}
              />
            ))
          )}
        </div>
      </div>
    );
  },
  (oldProps, newProps) => console.log(newProps)
);

export default ItemList;
