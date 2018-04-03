import * as fromProductsList from "../products/store/products.reducers";
import * as fromAuth from "../auth/store/auth.reducers";
import { ActionReducerMap } from "@ngrx/store";
import { productsReducer } from "../products/store/products.reducers";
import { authReducer } from "../auth/store/auth.reducers";

export interface AppState {
    productsList: fromProductsList.State,
    auth: fromAuth.State
}

export const reducers: ActionReducerMap<AppState> = {
    productsList: fromProductsList.productsReducer,
    auth: fromAuth.authReducer
}