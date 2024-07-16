import { Link } from "react-router-dom";
import type { RootState } from "../../store";
import { useSelector } from "react-redux";

export default function ProductList() {
    const products = useSelector((state: RootState) => state.product.products);

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