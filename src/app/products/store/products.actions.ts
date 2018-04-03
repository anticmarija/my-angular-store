import {Action} from "@ngrx/store";

export const GET_PRODUCTS = "GET_PRODUCTS";

export class GetProducts implements Action {
    readonly type = GET_PRODUCTS;

    payload;
}

export type ProductsActions = GetProducts;