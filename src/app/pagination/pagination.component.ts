import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../data-storage.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  pageIndexes = [];

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.getProductCount()
      .subscribe(
      (res: any) => {
        let productNumber = res.length;
        let j = 1;
        for (let i = 1; i <= productNumber; i += this.dataStorageService.perPage) {
          this.pageIndexes.push(j++);
        }
      })
  }

  changeProducts(pageNum: number) {
    this.dataStorageService.updatePage(pageNum);
    this.dataStorageService.getProducts(pageNum, this.dataStorageService.perPage, this.dataStorageService.currentCategory);
  }

}
