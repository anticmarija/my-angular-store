import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../data-storage.service';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { OnChanges, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { PaginationComponent } from '../pagination/pagination.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromApp from '../store/app.reducers'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [PaginationComponent]
})
export class ProductsComponent implements OnInit, OnDestroy {

  state: Observable<{products:Product[]}>;
  productsNumber: number;
  subscription: Subscription;
  category;
  constructor(private dataStorageService: DataStorageService, private router: Router, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    // this.dataStorageService.getProducts();

    // this.subscription = this.dataStorageService.getProductsObservable()
    //   .subscribe((res) => {
    //     this.products = res;
    //     this.productsNumber = this.products.length;
    //   })

    this.state = this.store.select('productsList');
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
    this.dataStorageService.getProducts(this.dataStorageService.pageNum, this.dataStorageService.perPage, category);
  }
}
