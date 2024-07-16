import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../store";
import { SetStateAction, useState } from "react";
import ProductView from "./ProductView";
import ProductEdit from "./ProductEdit";

export default function ProductDetail() {
    const [editMode, setEditMode] = useState<boolean>(false);

    const { id } = useParams<{ id: string }>();
    const product = useSelector(
        (state: RootState) => state.product.products.find(
            product => product.number === id
        )
    );

    if (!product) {
        return (
            <main className="mainError">
                <h1>OOOPS! Product Not Found!</h1>
            </main>
        )
    }

    return editMode ? 
        <ProductView product={product} setEditMode={setEditMode} /> : 
        <ProductEdit product={product} setEditMode={setEditMode} />;
}