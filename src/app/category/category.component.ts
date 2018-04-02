import { Component, OnInit, EventEmitter } from '@angular/core';
import { Category } from '../models/category.model';
import { DataStorageService } from '../../data-storage.service';
import { Output } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Output() onCategoryClick = new EventEmitter<string>();
  categories: Category[];
  activeCategory: string;
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.getCategories()
      .subscribe((res: any[]) => {
        this.categories = res;
        // this.activeCategory = res[0].name;
        // for (let c in this.categories) {
        //   +c === 0 ? this.categories[c].isActive = true : this.categories[c].isActive = false
        // }
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
