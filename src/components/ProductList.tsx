import { Link } from "react-router-dom";

export default  function ProductList() {
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