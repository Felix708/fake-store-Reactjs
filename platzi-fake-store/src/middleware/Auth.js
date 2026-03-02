import { redirect } from "react-router-dom";

// tidak ada html, tanpa default
export function Auth(){
    // ambil token dari local storage
    const token = localStorage.getItem("access_token");
    // kalau gaada, arahkan ke halaman login
    if(!token){
        return redirect("/login");
    }
    // kalau ada token boeh akses
    return null;
}