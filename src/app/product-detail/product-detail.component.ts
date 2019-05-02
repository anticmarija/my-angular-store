import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataStorageService } from '../../data-storage.service';
import { Params } from '@angular/router';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  id: string;
  isInCart = false;

  constructor(private dataStorageService: DataStorageService,
    private route: ActivatedRoute,
    private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.dataStorageService.getProduct(this.id)
            .subscribe((res: Product) => {

              this.product = res[0];
              this.isInCart = this.cartService.cartProducts.filter(e => e.name === this.product.name).length > 0;

            });
        }
      );

  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.isInCart = true;
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
    this.isInCart = false;
  }
}
