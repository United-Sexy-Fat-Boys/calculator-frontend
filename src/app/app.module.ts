import "./rxjs-extensions";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import {InMemoryDataService} from "./shared/in-memory-data.service";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HeroesComponent} from "./components/heroes/heroes.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {ProductService} from "./components/product-detail/services/product.service";
import {ProductSearchComponent} from "./components/product-search/product-search.component";
import {routing} from "./app.routing";

// Imports for loading & configuring the in-memory web api

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductDetailComponent,
    HeroesComponent,
    ProductSearchComponent,
    DashboardComponent,
    ProductDetailComponent,
    ProductSearchComponent,
    HeroesComponent
  ],
  providers: [
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
