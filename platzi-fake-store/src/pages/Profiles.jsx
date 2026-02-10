import { useEffect, useState } from "react";
import { Card, Spinner } from "flowbite-react";


export default function Profiles() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getUsers() {
        const urlUser = "https://api.escuelajs.co/api/v1/users/3"
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
            {loading ? (
                <div className="flex justify-center">
                    <Spinner aria-label="Default status example" />
                    <p className="font-bold ms-2">Loading user data...</p>
                </div>
            ) : (
                <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <Card className="max-w-sm w-full">
                    <div className="flex flex-col items-center pb-10">
                        <img
                            alt={users.name}
                            height="96"
                            src={users.avatar}
                            width="96"
                            className="mb-3 rounded-full shadow-lg"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                            {users.name}
                        </h5>
                        <h3 className="text-gray-300">{users.email}</h3>
                        {
                            users.role === "admin" ? (
                                <p className="text-gray-600 my-2">
                                    <span className="font-medium bg-red-400 px-2 pb-1 rounded text-gray-950">
                                        {users.role}
                                    </span>
                                </p>
                            ) : (
                                <p className="text-gray-600 my-2">
                                    <span className="font-medium bg-blue-200 px-2 pb-1 rounded">
                                        {users.role}
                                    </span>
                                </p>
                            )}
                        <div className="mt-4 flex space-x-3 lg:mt-6">
                            <a href="#" className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800">
                                Edit Profile
                            </a>
                        </div>
                    </div>
                </Card>
                </div>
            )}
        </div>
    );
}

// {/* First profile card */}
// {users && (
//     <div className="mt-6 p-6 bg-gray-100 rounded-lg max-w-md mx-auto">
//         <img
//             src={users.avatar}
//             alt={users.name}
//             className="w-24 h-24 rounded-full mx-auto mb-4"
//         />
//         <div className="text-center">
//             <h2 className="text-xl font-semibold mb-2">{users.name}</h2>
//             <p className="text-gray-600">{users.email}</p>
//         </div>
//     </div>
// )}