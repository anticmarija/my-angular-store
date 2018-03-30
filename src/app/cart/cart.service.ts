import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable()
export class CartService {

  cartProducts: Product[] = [];

  constructor() { }

  getCartProducts() {
    return this.cartProducts;
  }

  addToCart(product: Product) {
    this.cartProducts.push(product);
  }

  getCartProductsLength() {
    return this.cartProducts.length;
  }

  removeFromCart(product: Product) {
    for(let i = 0; i < this.cartProducts.length; i++) {
      if (this.cartProducts[i]._id === product._id) {
        this.cartProducts.splice(i, 1);
      }
    }
  }

}
