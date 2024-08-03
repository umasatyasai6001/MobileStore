import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./productslice";
const store=configureStore({
    reducer:{

        product1:ProductSlice,

    }


})
export default store;