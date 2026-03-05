import CardCartComponent from "../components/CardCartComponent"
import ModalConfirmation from "../components/ModalConfirmation";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function CartCheckout() {
    const navigate = useNavigate();

    const {setOpenModalConfirmation, deleteAll} = useContext(CartContext);

    function paymentConfirmation(){
        setOpenModalConfirmation(true);
        navigate("/");
        deleteAll();
    }

    return (
        <div className="">
            <CardCartComponent type="checkout" paymentConfirmation={paymentConfirmation} />
        </div>
    )
}