import { Dropdown, DropdownItem } from "flowbite-react";

export default function SortDropdown({ sortProducts }) {
    return (
        <div className="">
            <Dropdown label="Urutkan harga" color="alternative" dismissOnClick={false}>
                <DropdownItem onClick={() => sortProducts("HargaTermurah")}>Most Cheapest</DropdownItem>
                <DropdownItem onClick={() => sortProducts("HargaTermahal")}>Most Expensive</DropdownItem>
                <DropdownItem onClick={() => sortProducts("ascending")}>Ascending Alphabet</DropdownItem>
                <DropdownItem onClick={() => sortProducts("descending")}>Descending Alphabet</DropdownItem>
            </Dropdown>
        </div >
    )
}