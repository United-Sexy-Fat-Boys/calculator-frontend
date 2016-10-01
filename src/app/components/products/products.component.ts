import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Product} from "../product-detail/services/product";
import {ProductService} from "../product-detail/services/product.service";

@Component({
  //
  selector: 'my-products',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css']
})
export class ProductComponent implements OnInit {
  heroes: Product[];
  selectedHero: Product;

  constructor(private productService: ProductService,
              private router: Router) {
  }

  getHeroes(): void {
    this.productService
      .getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.productService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Product): void {
    this.productService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Product): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
