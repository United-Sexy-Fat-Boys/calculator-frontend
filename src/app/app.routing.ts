import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./components/product/dashboard/dashboard.component";
import {ProductComponent} from "./components/product/products/products.component";
import {ProductDetailComponent} from "./components/product/product-detail/product-detail.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'products',
    component: ProductComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
