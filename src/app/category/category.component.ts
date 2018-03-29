import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { DataStorageService } from '../../data-storage.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[];
  activeCategory: string;
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.getCategories()
      .subscribe((res: any[]) => {
        this.categories = res;
        this.activeCategory = res[0].name;
        for (let c in this.categories) {
          +c === 0 ? this.categories[c].isActive = true : this.categories[c].isActive = false
        }
      })
  }

  activate(i) {
    for (let c in this.categories) {
      if (+c === +i) {
        this.categories[c].isActive = true;
        this.activeCategory = this.categories[c].name;
      } else {
        this.categories[c].isActive = false;
      }
    }
  }

}
