import { Component, OnInit, EventEmitter  } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../models/product.model';
import { Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  params: any;
  @Input() product: Product;
  @Output() moreDetails = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onMoreDetails() {
    console.log(this.product._id);
    this.moreDetails.emit(this.product._id);
  }
}
