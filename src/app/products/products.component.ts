import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../data-storage.service';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { OnChanges, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [PaginationComponent]
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: any;
  productsNumber: number;
  subscription: Subscription;
  category;
  constructor(private dataStorageService: DataStorageService, private router: Router) { }

  ngOnInit() {
    this.dataStorageService.getProducts();

    this.subscription = this.dataStorageService.getProductsObservable()
      .subscribe((res) => {
        this.products = res;
        this.productsNumber = this.products.length;
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
    this.dataStorageService.getProducts(this.dataStorageService.pageNum, this.dataStorageService.perPage, category);
  }
}
