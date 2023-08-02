import { configureStore } from "@reduxjs/toolkit";

import templateSlice  from "./slices/templateSlice/templateSlice";


const store = configureStore({

    reducer:{
        counter:templateSlice
    }


});

export default store;