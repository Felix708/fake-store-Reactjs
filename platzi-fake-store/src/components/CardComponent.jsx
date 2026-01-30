import { Card } from "flowbite-react";

export default function CardComponent({ categoryProduct }) {
    return (
        <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={categoryProduct.image}
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {categoryProduct.name}
            </h5>
        </Card>
    )
}