import React from 'react';
import { ImageObject, ProductViewProps } from "../../types/product";

export default function ProductView({ product, setEditMode } : ProductViewProps) {
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
                    <h1>{product.name}</h1>
                    <button onClick={setEditMode}>Edit</button>
                </div>
                
                <p>{product.description}</p>
                <section className="productImages">
                    {product.images.map((image: ImageObject) => (
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