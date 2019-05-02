import * as ProductsActions from './products.actions';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';

export interface State {
    products: Product[],
    loading: boolean,
    productsLength: number,
    categories: Category[],
    productsOnPage: Product[],
    perPage: number,
    pageNum: number
}

export const initialState: State = {
    products: [],
    loading: true,
    productsLength: 0,
    categories: [],
    productsOnPage: [],
    perPage: 6,
    pageNum: 1
};

export function productsReducer(state = initialState, action: ProductsActions.ProductsActions) {

    switch (action.type) {
        case ProductsActions.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                productsLength: action.payload.length,
                loading: false
            }
        case ProductsActions.SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            }
        case ProductsActions.SET_PRODUCTS_PER_PAGE:
            let perPage = state.perPage;
            let pageNum = state.pageNum;

            return {
                ...state,
                productsOnPage: action.payload.slice(pageNum * perPage - perPage, perPage)
            }
        default:
            return state;
    }
}