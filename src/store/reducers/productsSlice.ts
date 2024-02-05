import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../../types/types";
import {fetchAllProducts} from "../asyncActions/fetchProducts";
import {RootState} from "../store";

interface IInitialState {
    products: IProduct[];
    isLoading: boolean;
    error: string;
    totalCount: number;
}

const initialState: IInitialState = {
    products: [],
    isLoading: false,
    error: "",
    totalCount: 0,
}


const productsSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        setTotalCount(state, action: PayloadAction<number>) {
            state.totalCount = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchAllProducts.pending.type, (state) => {
                state.isLoading = true
            })

            .addCase(fetchAllProducts.fulfilled.type, (state, action: PayloadAction<IProduct[]>) => {
                state.products = action.payload
                state.isLoading = false
            })

            .addCase(fetchAllProducts.rejected.type, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.isLoading = false
            })

    }
})
export const {setTotalCount} = productsSlice.actions

export const selectProducts = (state:RootState) => state.products

export default productsSlice.reducer
