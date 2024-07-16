import { useDispatch } from "react-redux";
import { ProductViewProps } from "../../types/product";

export default function ProductEdit({ product, setEditMode } : ProductViewProps) {
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
                <div className="topPanel">
                    <h1>Editin: {product.name}</h1>
                    <button onClick={setEditMode}>Save</button>
                </div>
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