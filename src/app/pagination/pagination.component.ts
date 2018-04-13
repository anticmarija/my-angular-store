import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../data-storage.service';
import * as fromApp from '../store/app.reducers'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  pageIndexes = [];

  constructor(private dataStorageService: DataStorageService, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.select('productsList')
      .subscribe(
      (res: any) => {
        this.pageIndexes = [];
        let productNumber = res.productsLength;
        let j = 1;
        for (let i = 1; i <= productNumber; i += res.perPage) {
          this.pageIndexes.push(j++);
        }
      })
  }

  changeProducts(pageNum: number) {
    this.dataStorageService.updatePage(pageNum);
    // this.dataStorageService.getProducts(pageNum, this.dataStorageService.perPage, this.dataStorageService.currentCategory);
  }

}
