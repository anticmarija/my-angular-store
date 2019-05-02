import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AppRoutingModule } from '../app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './auth/auth.service';
import { DataStorageService } from '../data-storage.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CategoryComponent } from './category/category.component';
import { CartService } from './cart/cart.service';
import { PaginationComponent } from './pagination/pagination.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './products/store/products.reducers';
import { authReducer } from './auth/store/auth.reducers';
import {reducers} from "./store/app.reducers";
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth.effects';
import { ProductsEffects } from './products/store/products.effects';
import { PurchasesComponent } from './purchases/purchases.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CheckoutComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    CategoryComponent,
    PaginationComponent,
    PurchasesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, ProductsEffects])

  ],
  providers: [AuthService, DataStorageService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
