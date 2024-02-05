import {createAsyncThunk} from "@reduxjs/toolkit";
import {ProductService} from "../../API/productService";
import {setTotalCount} from "../reducers/productsSlice";


type TData = {
    page: number;
    limit: number
}

export const fetchAllProducts = createAsyncThunk('products/fetchAll', async (data:TData, {rejectWithValue, dispatch}) => {
    const {page, limit} = data

    try {
        const response = await ProductService.getAllProducts(page, limit)
        dispatch(setTotalCount(response.headers['x-total-count']))

        return response.data

    } catch (e) {
        if (e instanceof Error)
            return rejectWithValue(e.message)
    }

})
