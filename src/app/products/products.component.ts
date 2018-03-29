import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../data-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];
  category;
  constructor(private dataStorageService: DataStorageService, private router: Router) { }

  ngOnInit() {
    this.dataStorageService.getProducts()
    .subscribe((res: any[]) => {
      this.products = res;
    })
  }

  moreDetails(id: number) {
    this.router.navigate(['product', id]);
  }

  setCategory(cat) {
    this.category = cat;
  }

}
