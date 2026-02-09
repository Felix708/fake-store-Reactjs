import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";
import imgLogo from "../assets/Epstore.png";
import { FcPaid } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
    return (
        <Navbar fluid rounded>
            <Link to="/">
                <NavbarBrand>
                    <img src={imgLogo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Epstore Fake Store</span>
                </NavbarBrand>
            </Link>
            <div className="flex md:order-2">
                <FcPaid className="text-4xl me-2 pt-1" />
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
                    <DropdownItem>Earnings</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem>Sign out</DropdownItem>
                </Dropdown>
                <NavbarToggle />
            </div>
        </Navbar>
    );
}