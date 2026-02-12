import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "flowbite-react";
import WrapperComponent from "../components/WrapperComponent";
import SearchComponent from "../components/SearchComponent";
import SortDropdown from "../components/SortDropdown";
import PaginationComponent from "../components/PaginationComponent";

export default function CategoryProducts() {
    // mengambil angka id dari URL (ambil path dinamis)
    const { categoryId } = useParams();
    const [category, setCategory] = useState({});
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page) => setCurrentPage(page);

    function processSearch(event) {
        // ambil data value dari input, simpan di state search
        setSearch(event.target.value);
        // ambil ulang data yang awalnya category id nya aja, pas search diisi, ditambah title untuk cari title
        // yang di bagian title dipakein & karena tanda tanya nya sudah dipakai di cari kategori
        getCategoryProducts("https://api.escuelajs.co/api/v1/products/?categoryId=" + categoryId + "&title=" + search);
    }

    function sortProducts(type) {
        // copy data producs sebelumnya, simpan di newProducts
        const newProducts = [...products];
        if (type == "HargaTermurah") {
            // update nilai newProducts menjadi ni;ai sort
            // nilai price dari a-b dari terkecil ke besar
            newProducts.sort((a, b) => a.price - b.price);
        } else if (type == "HargaTermahal") {
            // nilai price dari b-a dari terbesar ke kecil
            newProducts.sort((a, b) => b.price - a.price);
        } else if (type == "ascending") {
            // nilai title dari a-z
            newProducts.sort((a, b) => a.title.localeCompare(b.title));
        } else if (type == "descending") {
            // nilai title dari z-a
            newProducts.sort((a, b) => b.title.localeCompare(a.title));
        }
        // update state products sesuai nilai newProducts
        setProducts(newProducts);
    }

    async function getCategory() {
        const url = "https://api.escuelajs.co/api/v1/categories/" + categoryId;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            setCategory(result);
            setLoading(false);
        } catch (error) {
            console.error(error.message);
        }
    }
    async function getCategoryProducts(url = "https://api.escuelajs.co/api/v1/products/?categoryId=" + categoryId) {
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
        getCategory();
        getCategoryProducts();
    }, []);

    return (
        <div className="m-5">
            <h1 className="font-bold text-2xl ml-10 my-3">Category Product {category.name}</h1>
            <div className="flex justify-between mb-10 px-10">
                <SearchComponent processSearch={processSearch} />
                <SortDropdown sortProducts={sortProducts} />
            </div>
            {
                loading === true ? (
                    <div className="flex justify-center">
                        <Spinner aria-label="Default status example" />
                        <p className="font-bold ms-2">Loading data...</p>
                    </div>
                ) : (
                    <div className="">
                        <WrapperComponent data={products} type={"products"}></WrapperComponent>
                        <PaginationComponent onPageChange={onPageChange} currentPage={currentPage}/>
                    </div>
                )
            }
        </div>
    )
}