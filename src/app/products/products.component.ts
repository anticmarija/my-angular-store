import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../data-storage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.getProducts()
    .subscribe((res: any[]) => {
      console.log(res);
      this.products = res;
    })
  }

}
