import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Product } from "./app/models/product.model";
import { Subject } from "rxjs/Subject";


@Injectable()
export class DataStorageService {

    subject = new Subject<any>();

    products: Product[];
    pageNum = 1;
    perPage = 4;
    currentCategory = null;

    constructor(private httpClient: HttpClient) { }

    updatePage(pageNum) {
        this.pageNum = pageNum;
    }

    getProducts() {
        return this.httpClient.get('http://localhost:8000/store/product');
    }

    // getProducts(pageNum = this.pageNum, perPage = this.perPage, category = null) {
    //     if (category !== null) {
    //         return this.httpClient.get('http://localhost:8000/store/product', { params: { 'pageNum': pageNum + '', 'perPage': perPage + '', 'category.name': category } })
    //     } else {
    //       return  this.httpClient.get('http://localhost:8000/store/product', { params: { 'pageNum': pageNum + '', 'perPage': perPage + '' } })
    //     }
    // }

    getProductsByCat(category) {
        return this.httpClient.get('http://localhost:8000/store/product', { params: { 'category.name': category } })
    }

    getProduct(id) {
        let params = new HttpParams().set('id', id);
        return this.httpClient.get('http://localhost:8000/store/product', { params: params });
    }

    getCategories() {
        return this.httpClient.get('http://localhost:8000/store/category');
    }
}