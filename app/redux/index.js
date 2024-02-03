import { combineReducers } from "redux";
import CategorySlice from "./slices/CategorySlice";
import ProductSlice from "./slices/ProductSlice";
import SubCategorySlice from "./slices/SubCategorySlice";


export const rootReducer = combineReducers({
    category : CategorySlice,
    product : ProductSlice,
    subCategory : SubCategorySlice
}) 