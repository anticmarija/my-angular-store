import * as ProductsActions from './products.actions';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';

export interface State {
    products: Product[],
    productsLength: number,
    categories: Category[]
}

const initialState: State = {
    products: [],
    productsLength: 0,
    categories: []
};

// export const SET_PRODUCTS = "SET_PRODUCTS";

export function productsReducer(state = initialState, action: ProductsActions.ProductsActions) {

    switch (action.type) {
        case ProductsActions.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                productsLength: action.payload.length
            }
        case ProductsActions.SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            }
        default:
            return state;
    }
}