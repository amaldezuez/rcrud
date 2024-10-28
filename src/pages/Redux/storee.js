import { configureStore } from "@reduxjs/toolkit";
// import newslice  from './Slices/newslice'
import newsSlice from './Slices/newslice'
const newsStore=configureStore({
    reducer:{
        news:newsSlice
    }
})

export default newsStore
