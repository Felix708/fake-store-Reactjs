import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function ModalConfirmation({ openModalConfirmation, onCloseModalConfirmation  }) {

    return (
        <>
            <Modal show={openModalConfirmation} onClose={onCloseModalConfirmation}>
                <ModalHeader>Your payment was successful</ModalHeader>
                <ModalBody>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <p className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            We will send you an email with the details of your order.
                        </p>
                        <Button onClick={onCloseModalConfirmation}>Close</Button>
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}