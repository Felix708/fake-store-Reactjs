import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ButtonGroup } from "flowbite-react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";



export default function ModalCartComponent({ openModal, onCloseModal, item }) {
    const [qty, setQty] = useState(1);

    function updateQty(type) {
        if(type == "-" && qty === 1){
            return null;
        }
        if(type == "-"){
            setQty(qty - 1);
        } 
        if(type == "+"){
            setQty(qty + 1);
        }
    }

    const {addtoCart} = useContext(CartContext);

    const {isLoggedin} = useContext(AuthContext);
    const navigate = useNavigate();

    function handleAddToCart(){
        if(!isLoggedin){
            navigate("/login");
            return null;
        }

        addtoCart(item, qty);
        onCloseModal();
    }

    return (
        <Modal dismissible show={openModal} onClose={onCloseModal}>
            <ModalHeader>Terms of Service</ModalHeader>
            <ModalBody>
                <div className="flex items-center space-x-4">
                    <div className="shrink-0">
                        <img
                            alt="Neil image"
                            height="100"
                            src={item.images ? item.images[0] : ''}
                            width="100"
                        />
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{item.title}</p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">${item.price}</div>
                </div>
                <div className="flex justify-end">
                    <ButtonGroup outline>
                        <Button onClick={() => updateQty("-")}>
                            <FaMinus className="me-2 h-4 w-4" />
                        </Button>
                        <Button disabled>{qty}</Button>
                        <Button onClick={() => updateQty("+")}>
                            <FaPlus className="me-2 h-4 w-4" />
                        </Button>
                    </ButtonGroup>
                </div>
            </ModalBody>
            <ModalFooter className="flex justify-end">
                <Button onClick={onCloseModal} color="alternative">Batal</Button>
                <Button onClick={() => handleAddToCart(item, qty)}>
                    Keranjang
                </Button>
            </ModalFooter>
        </Modal>
        
    )
}