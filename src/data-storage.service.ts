import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient) {}

    getProducts() {
       return  this.httpClient.get('http://localhost:8000/store/product');
    }
}