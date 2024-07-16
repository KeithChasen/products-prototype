import { Dispatch, SetStateAction } from "react"

export type Product = {
    name: string
    number: string
    description: string
    images: ImageObject[]
}

export type ImageObject = {
    url: string,
    name: string
}

export type ProductViewProps = {
    product: Product
    setEditMode: Dispatch<SetStateAction<boolean>>
}