import * as productReducers from './products.reducers';
import * as productActions from "./products.actions";

import { Product } from "../../models/product.model";

describe('Products reduces', () => {
    describe('undefined action', () => {
        it('should return defaul state', () => {
            const { initialState } = productReducers;
            const action = {} as any;

            const state = productReducers.productsReducer(undefined, action);

            expect(state).toBe(initialState);
        });
    });

    describe('SET_PRODUCTS action', () => {
        it('should set products', () => {
            const products: Product[] =[
                { _id: 1, name: "Landing", description: "landing..." }
            ]
            const { initialState } = productReducers;
            // const payload = {};
            const action = new productActions.SetProducts([
                { _id: 1, name: "Landing", description: "landing..." },
                { _id: 2, name: "Sports", description: "sports..." },
                { _id: 3, name: "Strategy", description: "strategy..." },
                { _id: 4, name: "RPG", description: "rpg..." }
            ]);

            const state = productReducers.productsReducer(initialState, action);

            expect(state.products).toEqual([
                { _id: 1, name: "Landing", description: "landing..." },
                { _id: 2, name: "Sports", description: "sports..." },
                { _id: 3, name: "Strategy", description: "strategy..." },
                { _id: 4, name: "RPG", description: "rpg..." }
            ]);
        });
    });
});


