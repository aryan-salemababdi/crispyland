import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import templateSlice  from "./slices/templateSlice/templateSlice";


export type RootState = ReturnType<typeof store.getState>;

import logger from "redux-logger";

const store = configureStore({

    reducer:{
        counter:templateSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)


});

export default store;