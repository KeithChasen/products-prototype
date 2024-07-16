import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { testData } from './data';

export interface ProductState {
    products: Product[]
}

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

const initialState: ProductState = {
    products: testData
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        update: (state: ProductState, action: PayloadAction<Product>) => {
            const updatedProduct = action.payload;
            const index = state.products.findIndex(
                product => product.number === updatedProduct.number
            );
            if (index !== -1) {
                state.products[index] = updatedProduct;
            }

        }
    }
});

export const { update } = productSlice.actions;
export default productSlice.reducer;
