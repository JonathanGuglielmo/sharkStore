import { createContext, useContext , useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({ children }) {

    const Swal = require('sweetalert2')

    const [cartState, setCartState] = useState ("none")
    const [cantidadItems, setCantidadItems] = useState(0)
    const [cartList, setCartList] = useState([]);
    const [subTotal, setSubTotal] = useState(0);

    function setearCartState() {
        if (cantidadItems === 0) {
            setCartState("none")
        } else {
            setCartState("flex")
        }
    }

    const agregarItem =  (item) => {
    if (cartList.some(element => element.item === item.item)){
        let productoDetectado = cartList[cartList.findIndex(element => element.item === item.item)];
        if (productoDetectado.cantidad < productoDetectado.stock){
            productoDetectado.cantidad += item.cantidad;
            setCartList([...cartList]);
            setCantidadItems(cantidadItems + item.cantidad);
            setSubTotal(subTotal + (item.cantidad * item.price))
            setearCartState()
            Swal.fire(`Has agregado ${item.cantidad} ${item.item} al carrito`)
        } else {
            Swal.fire(`Lo sentimos, no nos quedan mas ${item.item} disponibles por el momento`)
        }
    } else {
        setCantidadItems(cantidadItems + item.cantidad)
        setCartList([...cartList, item])
        setSubTotal(subTotal + (item.cantidad * item.price))
        setearCartState()
        Swal.fire(`Has agregado ${item.cantidad} ${item.item} al carrito`)
    }}

    const eliminarItem = (item) => {
        let productoAEliminarIndex = cartList.findIndex(element => element.item === item.item);
        setCantidadItems(cantidadItems - item.cantidad)

        const nuevoCartList = [...cartList];

        nuevoCartList.splice(productoAEliminarIndex, 1);
        setCartList(nuevoCartList)

        setSubTotal(subTotal - (item.cantidad * item.price));
        setearCartState()
        if(subTotal <= 0 || subTotal === 0){
            setCartList([])
            setSubTotal(0)
            setCantidadItems(0)
        }
        
    }

    function vaciarCart() {
        setCartList([])
        setSubTotal(0)
        setCantidadItems(0)
        setearCartState()
    }

    return (
        <CartContext.Provider
            value={{
                cartList,
                cartState,
                cantidadItems,
                agregarItem,
                eliminarItem,
                vaciarCart,
                subTotal
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
