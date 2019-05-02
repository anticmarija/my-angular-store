import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../data-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { OnChanges, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { PaginationComponent } from '../pagination/pagination.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as ProductsActions from "./store/products.actions"
import * as fromApp from '../store/app.reducers'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [PaginationComponent]
})
export class ProductsComponent implements OnInit, OnDestroy {

  state: Observable<any>;
  products: Product[];
  productsNumber: number;
  subscription: Subscription;
  category;
  loading: boolean;

  constructor(private router: Router, private store: Store<fromApp.AppState>) {
    this.state = this.store.select('productsList');

  }

  ngOnInit() {
    // this.dataStorageService.getProducts();

    // this.subscription = this.dataStorageService.getProductsObservable()
    //   .subscribe((res) => {
    //     this.products = res;
    //     this.productsNumber = this.products.length;
    //   })
    this.state = this.store.select('productsList');
    this.store.dispatch(new ProductsActions.GetProducts())


    this.state
      .subscribe((res) => {
        this.products = res.products;
        this.loading = res.loading;
      })

  }

  moreDetails(id: number) {
    this.router.navigate(['product', id]);
  }

  setCategory(cat) {
    this.category = cat;
  }

  ngOnDestroy() {
    this.subscription = null;
  }

  onCategoryClick(category) {
    this.loading = true;
    category ? this.store.dispatch(new ProductsActions.GetProductsByCat(category))
      : this.store.dispatch(new ProductsActions.GetProducts());

    // this.dataStorageService.getProducts(this.dataStorageService.pageNum, this.dataStorageService.perPage, category);
  }
}
