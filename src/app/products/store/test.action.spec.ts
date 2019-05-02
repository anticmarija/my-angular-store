import * as ProductActions from "./products.actions";

describe('Products Actions', () => {

    describe('load products', () => {
        describe('Get products', () => {
            it('should create an action ', () => {
                const action = new ProductActions.GetProducts();

                expect({ ...action }).toEqual({
                    type: ProductActions.GET_PRODUCTS

                });
            });
        });

        describe('Set products', () => {
            it('should create an action ', () => {
                const payload = [
                    { _id: 1, name: "Landing", description: "landing..." },
                    { _id: 2, name: "Sports", description: "sports..." },
                    { _id: 3, name: "Strategy", description: "strategy..." },
                    { _id: 4, name: "RPG", description: "rpg..." }
                ];
                const action = new ProductActions.SetProducts(payload);

                expect({ ...action }).toEqual({
                    type: ProductActions.SET_PRODUCTS,
                    payload
                });
            });
        });
    });

});