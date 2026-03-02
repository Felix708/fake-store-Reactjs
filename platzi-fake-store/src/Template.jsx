import NavbarComponent from "./components/NavbarComponent";
import { Outlet } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";

export default function Template(){
    return(
        <>
        {/* // memanggil component yang akan ada di semua halaman */}
        <AuthProvider>
        <NavbarComponent />
        {/* // wadah dinamis seperti yield di simpan di outlet */}
        <Outlet />
        </AuthProvider>
        </>
    )
}