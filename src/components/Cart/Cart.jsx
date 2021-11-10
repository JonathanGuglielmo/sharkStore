import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import { getFirestore } from "../../services/getFirebase";
import "./Cart.css"
import 'firebase/firestore'


const Cart = () => {
  const { cartList, eliminarItem, vaciarCart, subTotal } = useCartContext();

  const generarCompra = () => {


    let ordenDeCompra = {};


    ordenDeCompra.buyer = {name:'Jonathan', phone:'1565662861', email:'guglielmojonathan@gmail.com'};
    ordenDeCompra.total = subTotal;
    ordenDeCompra.items = cartList.map(cartItem => {
      const id = cartItem.id;
      const title = cartItem.item;
      const price = cartItem.price * cartItem.cantidad;

      return {id, title, price}

    })
  
    console.log(ordenDeCompra)

  const dbQuery = getFirestore()
  const compraQuery = dbQuery.collection('Ordenes De Compra')
  compraQuery.add(ordenDeCompra)
  .then(result => alert(`su id de compra es ${result.id}`))
  .catch(err => console.log(err))

  }
  return (
      
    <div className="text-center" style={{width:"50%", margin:"auto"}}>
      <h2>Carrito de Compras</h2>
      {subTotal === 0 ? (
          <p>No hay productos en el carrito</p>
      ) : (
          cartList.map((item) => (

        <div
          className="d-flex align-items-center justify-content-between mb-2"
          key={item.item}
        >
          <img style={{ width: "100px", boxShadow:" 0 0 5px -2px black", borderRadius:"5px" }} src={item.img} alt="" />
          <div className="m-0 d-flex">
            <Link to={`/productos/${item.id}`} className="productoDesc">
              {item.item}
            </Link>
            <p className="fs-5 mt-0 me-2 mb-0 ms-2">
              {" "}
              x {item.cantidad} = ${item.cantidad * item.price}
            </p>
          </div>
          <button onClick={() => eliminarItem(item)} className="btn btn-danger">X</button>
        </div>
      )))}
      

    
      <div className="cartDiv">
        <h5 className="subTotal">Subtotal: ${subTotal}</h5>
      </div>
      {cartList === "" ? (
      <Link className="btn btn-primary m-3" to="">
        Seguir comprando
      </Link>
      ) : (
        <div>
            <Link className="btn btn-primary m-3" to="">Seguir comprando</Link>
            <button className="btn btn-danger m-3" onClick={() => vaciarCart()}>Vaciar carrito</button> 
        </div>
        
      )}
      <div>
        <button className="finishOrder" onClick={()=>generarCompra()}>Terminar compra</button>
      </div>
    </div>
  );
};

export default Cart;
