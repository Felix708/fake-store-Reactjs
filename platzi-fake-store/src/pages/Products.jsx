import CardCommerce from "../components/CardCommerce"
import { useState, useEffect } from "react"
import { Spinner } from "flowbite-react";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getDataProducts() {
        const url = "https://api.escuelajs.co/api/v1/products";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            setProducts(result);
            setLoading(false);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getDataProducts();
    }, []);

    return (
        <div className="">
            {
                loading === true ? (
                    <div className="flex justify-center">
                        <Spinner aria-label="Default status example" />
                        <p className="ml-2">Loading Products</p>
                    </div>
                ) : (
                    <div className="container mx-auto px-4 py-8">
                        <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {products.map((product) => (
                                <CardCommerce key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                )
            }
        </div>
    )
}