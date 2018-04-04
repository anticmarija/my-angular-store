import {Action} from "@ngrx/store";

export const SET_PRODUCTS = "SET_PRODUCTS";
export const GET_PRODUCTS = "GET_PRODUCTS";


export class SetProducts implements Action {
    readonly type = SET_PRODUCTS;

   constructor(public payload: any) {}
}

export class GetProducts implements Action {
    readonly type = GET_PRODUCTS;
}


export type ProductsActions = SetProducts | GetProducts;