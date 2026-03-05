import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { Card, Button, ButtonGroup } from "flowbite-react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CardCartComponent({ type, paymentConfirmation }) {
    const { cart, addQty, minQty, deleteItem, deleteAll } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <Card className="block mx-auto w-4xl mt-20">
            <div className="mb-4 flex items-center justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Your Cart</h5>
                <div className="text-sm font-medium text-red-600 hover:underline cursor-pointer dark:text-red-500" onClick={deleteAll}>
                    Delete all items
                </div>
            </div>
            <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {
                        cart.map((item, index) => (
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center  space-x-4">
                                    <div className="shrink-0">
                                        <img
                                            alt="Neil image"
                                            height="50"
                                            src={item.image}
                                            width="50"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1 text-left">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{item.title}</p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400"><b>{item.qty}x</b></p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">${item.price}</div>
                                </div>
                                <div className="flex justify-end">
                                    {
                                        type == "cart" ? (
                                            <>
                                                <ButtonGroup outline>
                                                    <Button onClick={() => minQty(item.id)}>
                                                        <FaMinus className="me-2 h-4 w-4" />
                                                    </Button>
                                                    <Button disabled>{item.qty}</Button>
                                                    <Button onClick={() => addQty(item.id)}>
                                                        <FaPlus className="me-2 h-4 w-4" />
                                                    </Button>
                                                </ButtonGroup>
                                                <FaTrash className="text-red-500 text-xl ms-2 mt-2 cursor-pointer" onClick={() => deleteItem(item.id)}></FaTrash>
                                            </>
                                        ) : (
                                            <ButtonGroup outline>
                                                    <Button disabled onClick={() => minQty(item.id)}>
                                                        <FaMinus className="me-2 h-4 w-4" />
                                                    </Button>
                                                    <Button disabled>{item.qty}</Button>
                                                    <Button disabled onClick={() => addQty(item.id)}>
                                                        <FaPlus className="me-2 h-4 w-4" />
                                                    </Button>
                                                </ButtonGroup>
                                        )
                                    }
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {
                cart.length > 0 && type == "cart" ? (
                    <div className="flex items-center justify-end mt-4">
                        <Button className="bg-gradient-to-r from-teal-200 to-lime-200 text-gray-900 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-lime-200 dark:focus:ring-teal-700" onClick={() => navigate("/checkout")}>Checkout</Button>
                    </div>
                ) : (
                    cart.length > 0 && type == "checkout" && (
                        <div className="">
                            <div className="flex flex-col justify-between mt-4">
                                <h1 className="text-xl font-bold dark:text-white ">Payment Details</h1>
                                <div className="flex justify-between mt-2 dark:text-white">
                                    <span className="ms-4 dark: text-white">Product Total: </span>
                                    <span className="ms-4 dark: text-white">${cart.reduce((total, item) => total + (item.price * item.qty), 0)}</span>
                                </div>
                                <div className="flex justify-between mt-2 dark:text-white">
                                    <span className="ms-4 dark: text-white">Shipping: </span>
                                    <span className="ms-4 dark: text-white">$5</span>
                                </div>
                                <div className="flex justify-between mt-2 dark:text-white">
                                    <span className="ms-4 dark: text-white">Grand Total: </span>
                                    <span className="ms-4 dark: text-white">${cart.reduce((total, item) => total + (item.price * item.qty), 0) + 5}</span>
                                </div>
                            </div>
                            <Button className="w-full mt-4 bg-gradient-to-r from-teal-200 to-lime-200 text-gray-900 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-lime-200 dark:focus:ring-teal-700" onClick={ () => paymentConfirmation() }>Proceed to Payment</Button>
                            <Button className="w-full mt-4 bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white hover:bg-gradient-to-br focus:ring-red-300 dark:focus:ring-red-800" onClick={() => navigate("/cart")}>Back To Cart</Button>
                        </div>
                    )
                )
            }
        </Card>
    )
}