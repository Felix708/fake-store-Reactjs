import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarToggle,
    Button
} from "flowbite-react";
import imgLogo from "../assets/Epstore.png";
import { FcPaid } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";


export default function NavbarComponent() {
    // get the object provided by AuthContext and pull out the boolean/token
    const { isLoggedin, logout } = useContext(AuthContext);

    const navigate = useNavigate();
    function logoutProcess(){
        // panggil func dari context
        logout();
        // context tdk bisa menggunakan redirect, jadi menggunakan navigate
        navigate("/login");
    }

    return (
        <Navbar fluid rounded>
            <Link to="/">
                <NavbarBrand>
                    <img src={imgLogo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Epstein's Goodies</span>
                </NavbarBrand>
            </Link>
            <div className="flex md:order-2">
                <Link to="/cart">
                    <FcPaid className="text-4xl me-2 pt-1" />
                </Link>
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <DropdownHeader>
                        <span className="block text-sm">Platzi Fake Store Web</span>
                        <span className="block truncate text-sm font-medium">Update Beta 1.0</span>
                    </DropdownHeader>
                    <Link to="/Profiles">
                        <DropdownItem>Profile</DropdownItem>
                    </Link>
                    <DropdownItem>Settings</DropdownItem>
                    <Link to="/Rankings">
                        <DropdownItem>Rankings</DropdownItem>
                    </Link>
                    <DropdownDivider />
                    <DropdownItem>Sign out</DropdownItem>
                </Dropdown>
                <NavbarToggle />
                {
                isLoggedin != null && (
                    <Button color="red" className="ms-3" onClick={logoutProcess}>
                        Logout
                    </Button>
                )
                }
            </div>
        </Navbar>
    );
}