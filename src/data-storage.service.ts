import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";


@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient) {}

    getProducts() {
       return  this.httpClient.get('http://localhost:8000/store/product');
    }

    getProduct(id) {
        let params = new HttpParams().set('id', id);
        return this.httpClient.get('http://localhost:8000/store/product', {params:params});
    }

    getCategories() {
        return this.httpClient.get('http://localhost:8000/store/category');
    }
}