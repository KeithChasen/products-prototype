import { Link } from "react-router-dom";
import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../storage/slices/productSlice";

export default  function ProductList() {
    const products = useSelector((state: RootState) => state.product.products);

    console.log(products, 'products')

    const dispatch = useDispatch();

    return (
        <>
            <h1>Product list</h1>
            <>
                <Link to={'/1'}>Item 1</Link>
                <Link to={'/2'}>Item 2</Link>
                <Link to={'/3'}>Item 3</Link>
            </>
        </>
    );
}