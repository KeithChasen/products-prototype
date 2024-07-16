import React from 'react';
import { ChangeEvent, useState, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { update } from "../../storage/slices/productSlice";
import { ProductViewProps } from "../../types/product";

export default function ProductEdit({ product, setEditMode } : ProductViewProps) {
    const dispatch = useDispatch();

    const [updatedProduct, setUpdatedProduct] = useState(product);

    if (!product) {
        return (
            <main className="mainError">
                <h1>OOOPS! Product Not Found!</h1>
            </main>
        )
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'images') {
            const images = [
                ...updatedProduct.images,
            ];

            const image = images[parseInt(e.target.id)];

            const newImage = {
                ...image,
                name: e.target.value
            }

            images[parseInt(e.target.id)] = newImage;

            setUpdatedProduct({
                ...updatedProduct,
                images
            })
        } else {
            setUpdatedProduct({
                ...updatedProduct,
                [e.target.name]: e.target.value
            })
        }
    }

    const updateProduct = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch(update(updatedProduct));
        setEditMode(e);
    }

    return (
        <>
            <main className="productDetails">
                <h1>Editing: </h1>
                <div className="topPanel">
                    <label htmlFor="productName">Product Name:</label>
                    <input 
                        type="text" 
                        id='productName' 
                        name='name'
                        value={updatedProduct.name}
                        onChange={handleInputChange}
                    />
                    <button onClick={updateProduct}>Save</button>
                </div>
                <label htmlFor="productDescription">Product Description:</label>
                <input 
                    type="text" 
                    id='productDescription' 
                    name='description'
                    value={updatedProduct.description}
                    onChange={handleInputChange}
                />
                <section className="productImages">
                    {updatedProduct.images.map((image, index) => (
                        <div>
                            <span>{image.name}</span>
                            <input 
                                type="text" 
                                id={`${index}`} 
                                value={image.name}
                                name='images'
                                onChange={handleInputChange}
                            />
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