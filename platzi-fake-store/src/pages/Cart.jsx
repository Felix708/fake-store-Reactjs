import CardCartComponent from "../components/CardCartComponent"

export default function Cart({ openModalConfirmation, onCloseModalConfirmation }) {

    return (
        <div className="flex items-center justify-center">
            <CardCartComponent type="cart" openModalConfirmation={openModalConfirmation} onCloseModalConfirmation={onCloseModalConfirmation} />
        </div>
    )
}