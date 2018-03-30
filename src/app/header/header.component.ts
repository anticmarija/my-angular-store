import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartLength: number;
  constructor(private router: Router, private cartService: CartService, private authService: AuthService) { }

  ngOnInit() {
  }

  navigateTo(route) {
    this.router.navigate([route]);
  }

}
