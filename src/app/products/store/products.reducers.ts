import * as ProductsActions from './products.actions';
import { Product } from '../../models/product.model';

export interface State {
    products: Product[];
}

const initialState: State = {
    products: []
};

export const SET_PRODUCTS = "SET_PRODUCTS";

export function productsReducer(state = initialState, action: ProductsActions.ProductsActions) {

    switch (action.type) {
        case ProductsActions.SET_PRODUCTS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}