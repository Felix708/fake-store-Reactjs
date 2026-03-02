import CardCommerce from "../components/CardCommerce"
import { useState, useEffect } from "react"
import { Spinner } from "flowbite-react";
import SearchComponent from "../components/SearchComponent";
import SortDropdown from "../components/SortDropdown";
import PaginationComponent from "../components/PaginationComponent";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page) => {
        setCurrentPage(page);
        getDataProducts("https://api.escuelajs.co/api/v1/products?limit=8" + "&offset=" + currentPage);
    };

    function processSearch(event) {
        setSearch(event.target.value);
        getDataProducts("https://api.escuelajs.co/api/v1/products/?title=" + search + "&limit=8" + "&offset=" + currentPage);
    }

    function sortProducts(type) {
        const newProducts = [...products];
        if (type == "HargaTermurah") {
            newProducts.sort((a, b) => a.price - b.price);
        } else if (type == "HargaTermahal") {
            newProducts.sort((a, b) => b.price - a.price);
        } else if (type == "ascending") {
            newProducts.sort((a, b) => a.title.localeCompare(b.title));
        } else if (type == "descending") {
            newProducts.sort((a, b) => b.title.localeCompare(a.title));
        }
        setProducts(newProducts);
    }

    async function getDataProducts(url = "https://api.escuelajs.co/api/v1/products?limit=8" + "&offset=" + currentPage) {
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
                        <p className="ml-2 font-bold">Loading Products...</p>
                    </div>
                ) : (
                    <div className="container mx-auto px-4 py-8">
                        <div className="justify-between mb-10 px-10">
                            <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>
                            <div className="flex justify-evenly mb-10 gap-7">
                            <SearchComponent processSearch={processSearch} />
                            <SortDropdown  sortProducts={sortProducts}/>
                            </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {products.map((product) => (
                                <CardCommerce key={product.id} product={product} />
                            ))}
                        </div>
                        </div>
                        <PaginationComponent onPageChange={onPageChange} currentPage={currentPage}/>
                    </div>
                )
            }
        </div>
    )
}