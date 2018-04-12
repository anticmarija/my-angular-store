import {Action} from "@ngrx/store";

export const SET_PRODUCTS = "SET_PRODUCTS";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_BY_CAT = "GET_PRODUCTS_BY_CAT";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const SET_CATEGORIES = "SET_CATEGORIES";


export class SetProducts implements Action {
    readonly type = SET_PRODUCTS;

   constructor(public payload: any) {}
}

export class GetProducts implements Action {
    readonly type = GET_PRODUCTS;
}

export class GetProductsByCat implements Action {
    readonly type = GET_PRODUCTS_BY_CAT;

    constructor(public payload: any){}
}

export class SetCategories implements Action {
    readonly type = SET_CATEGORIES;

   constructor(public payload: any) {}
}

export class GetCategories implements Action {
    readonly type = GET_CATEGORIES;
}


export type ProductsActions = SetProducts | GetProducts | GetCategories | SetCategories;