import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Product } from "./app/models/product.model";
import { Subject } from "rxjs/Subject";


@Injectable()
export class DataStorageService {

    subject = new Subject<any>();

    products: any;
    total = new Subject<number>();
    pageNum = 1;
    perPage = 4;
    currentCategory = null;

    constructor(private httpClient: HttpClient) { }

    getProductsObservable() {
        return this.subject.asObservable();
    }

    getProductCount(category = null) {
        if (!category) {
            return this.httpClient.get('http://localhost:8000/store/product');
        } else {
            return this.httpClient.get('http://localhost:8000/store/product', { params: { 'category.name': category } });

        }
    }

    updatePage(pageNum) {
        this.pageNum = pageNum;
    }

    getProducts(pageNum = this.pageNum, perPage = this.perPage, category = null) {
        if (category !== null) {
            this.httpClient.get('http://localhost:8000/store/product', { params: { 'pageNum': pageNum + '', 'perPage': perPage + '', 'category.name': category } })
                .subscribe((res: any) => {
                    this.products = res;
                    console.log(res)
                    this.subject.next(this.products);

                });
        } else {
            this.httpClient.get('http://localhost:8000/store/product', { params: { 'pageNum': pageNum + '', 'perPage': perPage + '' } })
                .subscribe((res: any) => {
                    this.products = res;
                    console.log(res);
                    this.currentCategory = category;
                    this.subject.next(this.products);
                });
        }
    }

    getProduct(id) {
        let params = new HttpParams().set('id', id);
        return this.httpClient.get('http://localhost:8000/store/product', { params: params });
    }

    getCategories() {
        return this.httpClient.get('http://localhost:8000/store/category');
    }
}