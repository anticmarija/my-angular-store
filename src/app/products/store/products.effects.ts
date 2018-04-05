import { Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Effect } from "@ngrx/effects";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import * as ProductsActions from "./products.actions";
import { DataStorageService } from "../../../data-storage.service";

@Injectable()
export class ProductsEffects {
    @Effect()
    getProducts = this.actions$
        .ofType(ProductsActions.GET_PRODUCTS)
        .switchMap(() => {
            return this.dataStorageService.getProducts();
        })
        .switchMap((res: any) => {
            console.log(res);
            return [
                {
                    type: ProductsActions.SET_PRODUCTS,
                    payload: res
                }
            ]
        })

    constructor(private actions$: Actions, private dataStorageService : DataStorageService) { }
}