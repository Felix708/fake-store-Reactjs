import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";


export default function Profiles() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getUsers() {
        const urlUser = "https://api.escuelajs.co/api/v1/users/1"
        try {
            const response = await fetch(urlUser);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            // isi data categoryProduct diatas yang awalnya useState kosong jdi dari API
            setUsers(result);
            setLoading(false);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="">
            {
                loading == true ? (
                <div className="flex justify-center">
                    <Spinner aria-label="Default status example" />
                    <p className="font-bold ms-2">Loading user data...</p>
                </div>
            ) : (
                <div>
                    <div className="mt-6 p-6 bg-gray-100 rounded-lg max-w-md mx-auto">
                        <img src={users.avatar} alt={users.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <div className="text-center">
                            <h2 className="text-xl font-semibold mb-2">{users.name}</h2>
                            <p className="text-gray-600">{users.email}</p>
                            <p className="text-gray-600 my-2"><span className="font-medium bg-blue-200 px-2 pb-1 rounded">{users.role}</span> </p>
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    )
}