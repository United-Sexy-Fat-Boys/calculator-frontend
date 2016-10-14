import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Product} from "../../../shared/model/product/product";
import {ProductService} from "../product-detail/services/product.service";

@Component({
  //
  selector: 'my-products',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService,
              private router: Router) {
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .then(products => this.products = products);
  }

  add(name: string, calories: number): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.productService.createProduct(name, calories)
      .then(product => {
        this.products.push(product);
        this.selectedProduct = null;
      });
  }

  deleteProduct(product: Product): void {
    this.productService
      .deleteProduct(product.id)
      .then(() => {
        this.products = this.products.filter(h => h !== product);
        if (this.selectedProduct === product) {
          this.selectedProduct = null;
        }
      });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProduct.id]);
  }
}
