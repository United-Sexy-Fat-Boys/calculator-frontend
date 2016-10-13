import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Product} from "./product";

@Injectable()
export class ProductService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private productsUrl = 'app/products';  // URL to web api

  constructor(private http: Http) {
  }

  getProducts(): Promise<Product[]> {
    return this.http.get(this.productsUrl)
      .toPromise()
      .then(response => response.json().data as Product[])
      .catch(this.handleError);
  }

  getProduct(id: number): Promise<Product> {
    return this.getProducts()
      .then(product => product.find(product => product.id === id));
  }

  deleteProduct(id: number): Promise<void> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  createProduct(name: string, calories: number): Promise<Product> {
    return this.http
      .post(this.productsUrl, JSON.stringify({name: name, calories: calories}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(product: Product): Promise<Product> {
    const url = `${this.productsUrl}/${product.id}`;
    return this.http
      .put(url, JSON.stringify(product), {headers: this.headers})
      .toPromise()
      .then(() => product)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
