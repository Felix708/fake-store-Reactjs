import CardComponent from "./CardComponent";
import CardCommerce from "./CardCommerce";

export default function WrapperComponent({ data, type, children }) {
    return (
        <div className="w-4xl block mx-auto">
            {children}
            <div className="grid grid-cols-4 gap-4 m-2">
                {/* {props data: menyimpan data yang mau dimunculkan di card
               type: jenis card yang mau ditampilakn, cardcomp atau cardcommerce
               children: tambahan bagian judul kalau perlu} */}
                {
                    data.map((item, index) => 
                        type == "categoryProduct" ? (
                        <CardComponent categoryProduct={item} key={index} />
                    ) : (
                    <CardCommerce product={item} key={index} />
                )
                    )}
            </div>
        </div>
    );
}