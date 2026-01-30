import BannerComponent from "./components/BannerComponent";
import WrapperComponent from "./components/WrapperComponent";
import { Button } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function App() {
  const [categoryProduct, setCategoryProduct] = useState([
    {
      id: 1,
      name: "Baju",
      image: "https://tse4.mm.bing.net/th/id/OIP.YQGr_YZogs-okin0pQum2gHaII?cb=defcache2defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 2,
      name: "Celana",
      image: "https://y2kdream.com/cdn/shop/files/Y2K-Distressed-Low-Waist-Print-Baggy-Jeans-2.webp?v=1721224778&width=800",
    },
    {
      id: 3,
      name: "Sandal",
      image: "https://down-id.img.susercontent.com/file/id-11134207-7r98t-lxjj0lk4irsae3",
    },
    {
      id: 4,
      name: "Aksesoris",
      image: "https://down-id.img.susercontent.com/file/id-11134207-7rash-m30jok92vxslb2",
    },
  ]);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "sepatu dewasa",
      price: 50,
      images: [
        "https://th.bing.com/th/id/OIP.s5A0TZ7sEwdHb5g42F7nMwHaHU?o=7&cb=defcache2rm=3&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3"
      ], 
    },
    {
      id: 2,
      title: "sepatu anak",
      price: 10,
      images: [
        "https://thumbs.dreamstime.com/b/old-worn-out-shoes-holes-toes-homeless-child-person-old-worn-out-shoes-holes-toes-homeless-person-child-poverty-309187354.jpg"
      ],
    },
    {
      id: 3,
      title: "sepatu?",
      price: 30,
      images: [
        "https://pics.craiyon.com/2023-10-02/bcacb662cb72412fbeb362ceaf000ff7.webp"
      ],
    },
    {
      id: 4,
      title: "sepatu super",
      price: 60,
      images: [
        "https://static.designboom.com/wp-content/uploads/2023/04/mschf-bwd-shoes-backwards-designboom-01.jpg"
      ],
    },
  ]);

  return (
    // untuk memanggil lebih dari 1 comp, harus dibungkus <> </> atau <div> <div/>
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
          <Button className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800">
            Selengkapnya
          </Button>
          </Link>
        </div>
      </WrapperComponent>
    </div>
  );
}