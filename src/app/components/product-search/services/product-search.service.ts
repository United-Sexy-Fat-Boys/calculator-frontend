import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Product} from "../../product-detail/services/product";

@Injectable()
export class ProductSearchService {

  constructor(private http: Http) {
  }

  search(term: string): Observable<Product[]> {
    return this.http
      .get(`app/heroes/?name=${term}`)
      .map((r: Response) => r.json().data as Product[]);
  }
}
