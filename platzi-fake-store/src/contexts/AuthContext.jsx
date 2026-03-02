import { createContext, useState } from "react";
// membuat context,  nama sama dgn nama file
export const AuthContext = createContext();

// membuat porses global data/func. nama file diganti context = provider
export default function AuthProvider({ children }) {
    const [isLoggedin, setIsLogin] = useState(localStorage.getItem("access_token"));

    // update nilai login
    function updateToken(){
        setIsLogin(localStorage.getItem("access_token"));
    }

    function logout(){
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        // nilai is logged in nya di navbar ilang itemnya
        setIsLogin(null);
    }

    return (
        // untuk mengeluarkan data non-func yg akan diakses oleh file lain
        <AuthContext.Provider value={{ isLoggedin, updateToken, logout }}>
            {children}
        </AuthContext.Provider>
    )
}