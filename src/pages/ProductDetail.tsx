import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../store";
import { update } from "../storage/slices/productSlice";

export default function ProductDetail() {

    const { id } = useParams<{ id: string }>();
    const product = useSelector(
        (state: RootState) => state.product.products.find(
            product => product.number === id
        )
    );

    const dispatch = useDispatch();

    if (!product) {
        return (
            <main className="mainError">
                <h1>OOOPS! Product Not Found!</h1>
            </main>
        )
    }

    return (
        <>
            <main className="productDetails">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <section className="productImages">
                    {product.images.map(image => (
                        <div>
                            <span>{image.name}</span>
                            <img 
                                src={`${image.url}`} 
                                key={image.name} 
                                alt='Image Not Found!' 
                            />
                        </div>
                    ))}
                </section>
            </main>
        </>
    );
}