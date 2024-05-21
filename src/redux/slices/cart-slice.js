import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
    name:"cartSlice",
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload);
        },
        deleteFromCart:(state,action)=>{

        },
        clearCart:(state,action)=>{

        },
    }
});

export const {addToCart,deleteFromCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;