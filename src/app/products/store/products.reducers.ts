import * as ProductsActions from './products.actions';
import { Product } from '../../models/product.model';

export interface State {
    products: Product[];
}

const initialState: State = {
    products: [
    ]
};

export const GET_PRODUCTS = "GET_PRODUCTS";
export function productsReducer(state = initialState, action: ProductsActions.ProductsActions) {

    switch (action.type) {
        case ProductsActions.GET_PRODUCTS:
            return {
                ...state,

            }
        default:
            return state;
    }
}