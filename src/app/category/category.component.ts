import { Component, OnInit, EventEmitter } from '@angular/core';
import { Category } from '../models/category.model';
import { DataStorageService } from '../../data-storage.service';
import { Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as ProductsActions from "../products/store/products.actions";
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  state: Observable<any>;
  @Output() onCategoryClick = new EventEmitter<string>();
  categories: Category[];
  activeCategory: string;
  constructor(private dataStorageService: DataStorageService, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.state = this.store.select('productsList');

    this.store.dispatch(new ProductsActions.GetCategories())

    this.state.subscribe((res)=> {
      this.categories = res.categories;
    })
  }

  activate(category) {
    for (let c in this.categories) {
      if (+c === +category._id-1) {
        this.categories[c].isActive = true;
        this.activeCategory = this.categories[c].name;
      } else {
        this.categories[c].isActive = false;
      }
    }
    this.onCategoryClick.emit(category.name);
    // this.dataStorageService.getProducts(this.dataStorageService.pageNum, this.dataStorageService.perPage, category.name);
  }


}
