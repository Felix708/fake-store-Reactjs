import { useEffect, useState, createContext } from "react"

export const CartContext = createContext()

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

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

return (
    <CartContext.Provider value={{ cart, addtoCart }}>
        {children}
    </CartContext.Provider>
)
}
