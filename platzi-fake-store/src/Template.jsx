import NavbarComponent from "./components/NavbarComponent";
import { Outlet } from "react-router-dom";

export default function Template(){
    return(
        <>
        {/* // memanggil component yang akan ada di semua halaman */}
        <NavbarComponent />
        {/* // wadah dinamis seperti yield di simpan di outlet */}
        <Outlet />
        </>
    )
}