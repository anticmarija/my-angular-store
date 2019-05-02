import { ProductsComponent } from "./app/products/products.component";
import { ProductComponent } from "./app/product/product.component";
import { Routes } from "@angular/router";
import { LoginComponent } from "./app/auth/login/login.component";
import { RegisterComponent } from "./app/auth/register/register.component";
import { CartComponent } from "./app/cart/cart.component";
import { CheckoutComponent } from "./app/checkout/checkout.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from "./app/page-not-found/page-not-found.component";
import { ProductDetailComponent } from "./app/product-detail/product-detail.component";
import { PurchasesComponent } from "./app/purchases/purchases.component";

const appRoutes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'purchases', component: PurchasesComponent },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}