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
  heroes: Product[] = [];

  constructor(private router: Router,
              private heroService: ProductService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Product): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
