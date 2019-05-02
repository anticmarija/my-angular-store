import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Product } from "./app/models/product.model";
import { Subject } from "rxjs/Subject";


@Injectable()
export class DataStorageService {

    subject = new Subject<any>();

    products: Product[];
    currentCategory = null;

    constructor(private httpClient: HttpClient) { }

    // updatePage(pageNum) {
    //     this.pageNum = pageNum;
    // }

    getProducts() {
        return this.httpClient.get('http://localhost:8000/store/products');
    }

    getProductsPerPage(category = null) {
        if (category !== null) {
            return this.httpClient.get('http://localhost:8000/store/products', { params: { 'category': category } })
        } else {
            return this.httpClient.get('http://localhost:8000/store/products')
        }
    }

    getProductsByCat(category) {
        return this.httpClient.get('http://localhost:8000/store/products', { params: { 'category': category } })
    }

    getProduct(id) {
        let params = new HttpParams().set('id', id);
        return this.httpClient.get('http://localhost:8000/store/products', { params: params });
    }

    getCategories() {
        return this.httpClient.get('http://localhost:8000/store/categories');
    }
}