import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { AuthService } from '../auth/auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from "../store/app.reducers";
import * as fromAuth from "../auth/store/auth.reducers";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authState: Observable<fromAuth.State>;

  cartLength: number;
  constructor(private router: Router, private cartService: CartService, private authService: AuthService, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  navigateTo(route) {
    this.router.navigate([route]);
  }

}
