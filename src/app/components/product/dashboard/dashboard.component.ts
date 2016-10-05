import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Product} from "../product-detail/services/product";
import {ProductService} from "../product-detail/services/product.service";

@Component({
  //
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];

  constructor(private router: Router,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts()
      .then(product => this.products = product.slice(1, 5));
  }

  gotoDetail(product: Product): void {
    let link = ['/detail', product.id];
    this.router.navigate(link);
  }
}
