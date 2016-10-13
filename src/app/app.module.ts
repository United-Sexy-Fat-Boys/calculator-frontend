import "./rxjs-extensions";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./components/product/dashboard/dashboard.component";
import {ProductComponent} from "./components/product/products/products.component";
import {ProductDetailComponent} from "./components/product/product-detail/product-detail.component";
import {ProductService} from "./components/product/product-detail/services/product.service";
import {ProductSearchComponent} from "./components/product/product-search/product-search.component";
import {routing} from "./app.routing";
import {CategoryComponent} from "./components/category/category.component";
import {CategoryService} from "./components/category/service/category.service";
import {DishComponent} from "./components/dish/dish.component";
import {InMemoryProductsService} from "./shared/in-memory-products.service";
import {InMemoryCategoriesService} from "./shared/in-memory/categories/in-memory-categories.service";

import {InMemoryWebApiModule} from "angular2-in-memory-web-api";

// Imports for loading & configuring the in-memory web api

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryProductsService, InMemoryCategoriesService),
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductDetailComponent,
    ProductComponent,
    ProductSearchComponent,
    DashboardComponent,
    ProductDetailComponent,
    ProductSearchComponent,
    ProductComponent,
    CategoryComponent,
    DishComponent
  ],
  providers: [
    ProductService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
