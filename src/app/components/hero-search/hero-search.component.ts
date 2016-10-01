import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {HeroSearchService} from "./services/hero-search.service";
import {Product} from "../hero-detail/services/product";

@Component({
  //
  selector: 'hero-search',
  templateUrl: 'hero-search.component.html',
  styleUrls: ['hero-search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Product[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroSearchService: HeroSearchService,
              private router: Router) {
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.heroSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Product[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Product[]>([]);
      });
  }

  gotoDetail(hero: Product): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
