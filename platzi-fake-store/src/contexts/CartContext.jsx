import { useEffect, useState, createContext } from "react"

export const CartContext = createContext()

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [openModalConfirmation, setOpenModalConfirmation] = useState(false);

    function addtoCart(product, qty) {
        setCart((prev) => {
            // array untuk cek apakah product sudah ada atau belum
            const exist = prev.find((item) => item.id === product.id);
            if (exist) {
                // untuk update qty dari product id yang udh ada
                return prev.map((item) => {
                    if (item.id === product.id) {
                        return { ...item, qty: item.qty + qty }
                    } else {
                        return item;
                    }
                });
            }
            // jika tidak ada produknya berarti tambahkan baru
            return [
                ...prev, {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.images ? product.images[0] : '',
                    qty: qty
                }
            ]
        })
}

useEffect(() => {
    console.log(cart);
}, [cart])

function addQty(productId){
    setCart((prev) => {
        // cari product yg akan diupdate qty nya
        return prev.map((item) => {
            if(item.id == productId){
                return {...item, qty: item.qty + 1}
            } else {
                return item;
            }
        })
    })
}
function minQty(productId){
    setCart((prev) => {
        // cari product yg akan diupdate qty nya
        return prev.map((item) => {
            if(item.id == productId){
                if(item.qty > 1){
                    return {...item, qty: item.qty - 1}
                } else {
                    // kalau qty saat ini <1 jangan dikurangi qty nya
                    return item;
                }
            } else {
                return item;
            }
        })
    })
}

function deleteItem(productId){
    setCart((prev) => {
        // filter: mencari data, cari selain yg mau dihapus, update ke state
        return prev.filter((item) => item.id != productId)
    })
}

function deleteAll(){
    setCart([]);
}

return (
    <CartContext.Provider value={{ cart, addtoCart, addQty, minQty, deleteItem, deleteAll, setOpenModalConfirmation, openModalConfirmation }}>
        {children}
    </CartContext.Provider>
)
}
