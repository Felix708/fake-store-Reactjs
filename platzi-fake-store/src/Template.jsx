import NavbarComponent from "./components/NavbarComponent";
import { Outlet } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import CartProvider from "./contexts/CartContext";

export default function Template() {
    return (
        <>
            {/* // memanggil component yang akan ada di semua halaman */}

            <AuthProvider>
                <CartProvider>
                    <NavbarComponent />
                    {/* // wadah dinamis seperti yield di simpan di outlet */}
                    <Outlet />
                </CartProvider>
            </AuthProvider>
        </>
    )
}