import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/category.model';
import { DataStorageService } from '../../data-storage.service';
import { Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as ProductsActions from "../products/store/products.actions";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  state: Observable<any>;
  @Output() onCategoryClick = new EventEmitter<string>();
  categories: Category[];
  activeCategory: string | null;
  constructor(private route: ActivatedRoute, private store: Store<fromApp.AppState>) {
    route.queryParams.subscribe((queryParams: any) => {
      if (!queryParams.category) {
        this.activeCategory = null;
        this.activate(null);
      }
    });
  }

  ngOnInit() {
    this.state = this.store.select('productsList');
    this.store.dispatch(new ProductsActions.GetCategories())
    this.state.subscribe((res) => {
      this.categories = res.categories;
    })
  }

  activate(category) {
    if (category) {
      for (let c of this.categories) {
        if (c.name === category.name) {
          c.isActive = true;
          this.activeCategory = c.name;
        } else {
          c.isActive = false;
        }
      }
      this.onCategoryClick.emit(category.name);
    } else {
      this.onCategoryClick.emit(null);
      if (this.categories) {
        for (let c of this.categories) {
          c.isActive = false;
        }
      }
    }

    // this.dataStorageService.getProducts(this.dataStorageService.pageNum, this.dataStorageService.perPage, category.name);
  }


}
