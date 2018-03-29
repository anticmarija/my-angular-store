import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataStorageService } from '../../data-storage.service';
import { Params } from '@angular/router';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  id: number;

  constructor(private dataStorageService: DataStorageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.dataStorageService.getProduct(this.id)
          .subscribe((res: Product) => {
            this.product = res[0];
          });
      }
      );
  }

}
