import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ProductState {
    value: Array<string>
}

const initialState = {
    value: []
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        update: (state) => {}
    }
});

export const { update } = productSlice.actions;
export default productSlice.reducer;
