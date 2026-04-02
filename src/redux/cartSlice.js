import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[]
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            const exitingProduct = state.cart.find((p)=>p.id == action.payload.id)
            if(exitingProduct){
                return {
                    ...state,
                    cart:state.cart.qty + 1
                }
            }
            
            
        }
    }
});
