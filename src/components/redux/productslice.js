import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // title: 'addcart',
    // cartdata: 0,
    cartValues:[],
};

const ProductSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        addtocart: (state, action) => {
            // state.cartdata += 1;
            state.cartValues.push(action.payload);
        },
        removeItem:(state,action)=>{
        //    state.cartValues= state.cartValues.filter((item)=>item.ProductId!=action.payload.ProductId)

              const index=state.cartValues.findIndex((obj)=>obj.ProductName===action.payload.ProductName)
              if (index !== -1) {
              state.cartValues.splice(index,1);
              }
          
        }
    }
});

export default ProductSlice.reducer;
export const { addtocart,removeItem } = ProductSlice.actions;
