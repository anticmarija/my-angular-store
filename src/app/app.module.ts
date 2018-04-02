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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from '../app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth-guard.service';
import { DataStorageService } from '../data-storage.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CategoryComponent } from './category/category.component';
import { CartService } from './cart/cart.service';
import { PaginationComponent } from './pagination/pagination.component';


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
    UserComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    CategoryComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [AuthService, AuthGuard, DataStorageService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
