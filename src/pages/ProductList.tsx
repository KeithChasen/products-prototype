import { Link } from "react-router-dom";
import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../storage/slices/productSlice";

export default function ProductList() {
    const products = useSelector((state: RootState) => state.product.products);

    console.log(products, 'products')

    const dispatch = useDispatch();

    return (
        <>
            <main className="productList">
            <h1>Product list</h1>
                {
                    products.map(product => (
                        <Link to={`/${product.number}`}>
                            {product.name}
                        </Link>
                    ))
                }
            </main>
        </>
    );
}