import { TextInput } from "flowbite-react";
import { IoIosSearch } from "react-icons/io";

export default function SearchComponent({ processSearch }) {
    return (
        <div className="w-6xl">
            <TextInput id="email4" type="email" icon={IoIosSearch} placeholder="Search product name..." required onKeyUp={(event) => processSearch(event)} />
        </div>
    )
}