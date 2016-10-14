import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {Product} from "../../../shared/model/product/product";
import {ProductService} from "./services/product.service";

@Component({
  //
  selector: 'my-product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.productService.getProduct(id)
        .then(product => this.product = product);
    });
  }

  saveProduct(): void {
    this.productService.update(this.product)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
