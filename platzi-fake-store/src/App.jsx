import BannerComponent from "./components/BannerComponent";
import WrapperComponent from "./components/WrapperComponent";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "flowbite-react";


export default function App() {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  async function getDataCategories() {
    const url = "https://api.escuelajs.co/api/v1/categories";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      
      const result = await response.json();
      // isi data categoryProduct diatas yang awalnya useState kosong jdi dari API
      setCategoryProduct(result.slice(0, 4));
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  }
  async function getDataProducts() {
    const url = "https://api.escuelajs.co/api/v1/products";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      
      const result = await response.json();
      // isi data categoryProduct diatas yang awalnya useState kosong jdi dari API
      setProducts(result.slice(0, 4));
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // memanggil data API pas baru dibuka halamannya dgn useEffect
  useEffect(() => {
    getDataCategories();
    getDataProducts();
  }, []);

  return (
    // untuk memanggil lebih dari 1 comp, harus dibungkus <> </> atau <div> <div/>
    <>
      {
        loading == true ? (
          <div className="flex justify-center">
            <Spinner aria-label="Default status example" />
            <p className="font-bold ms-2">Loading data...</p>
          </div>
        ) : (
          <div className="">
            <BannerComponent />
            <WrapperComponent data={categoryProduct} type={"categoryProduct"}>
              {/* isi children nya */}
              <div className="flex justify-between my-10">
                <h1 className="text-2xl font-bold">Categories</h1>
              </div>
            </WrapperComponent>
            <WrapperComponent data={products} type={"products"}>
              {/* isi children nya */}
              <div className="flex justify-between my-10">
                <h1 className="text-2xl font-bold">Daftar Produk Populer</h1>
                {/* pindah halaman(pengganti a href): Link to */}
                <Link to="/Products">
                  <Button className="bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white hover:bg-linear-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800">
                    Selengkapnya
                  </Button>
                </Link>
              </div>
            </WrapperComponent>
          </div>
        )
      }
    </>
  );
}