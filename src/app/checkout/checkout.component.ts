import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Product } from '../models/product.model';
import { DataStorageService } from '../../data-storage.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartProducts: Product[] = [];
  totalPrice = 0;
  message = null;
  constructor(private cartService: CartService, private dataStorage: DataStorageService) { }

  ngOnInit() {
    this.cartProducts = this.cartService.getCartProducts();

    for (let p of this.cartProducts) {
      this.totalPrice += p.price;
    }
  }

  onOrder() {
    this.dataStorage.postPurchase(this.cartProducts).subscribe((res: any) => {
      this.message = res.data.message;
    })
  }
}
