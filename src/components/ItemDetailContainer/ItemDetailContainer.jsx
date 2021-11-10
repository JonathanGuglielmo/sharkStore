import React, { useEffect, useState } from "react";
import { getFirestore } from "../../services/getFirebase";

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ id }) => {
  
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);

  useEffect(() => {
    const db = getFirestore()
    db.collection('items').doc(id).get() 
    .then(resp => setItem({id: resp.id, ...resp.data()}))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
  }, [id]);
  
  return (
    <div className="text-center">
      {!loading ? (
        <ItemDetail
          id={item.id}
          nombre={item.title}
          img={item.image}
          descripcion={item.description}
          stock={item.stock}
          precio={item.price}
        />
      ) : (
        <div>
            <p className="text-center mt-5 w-100">
              Cargando producto...
            </p>
            <div
              className="text-center d-flex align-items-center justify-content-center"
              style={{ height: "80vh" }}
            >
              <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
      )}
      
    </div>
  );
};

export default ItemDetailContainer;