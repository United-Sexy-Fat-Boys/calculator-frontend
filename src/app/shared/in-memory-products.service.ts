import {InMemoryDbService} from "angular2-in-memory-web-api";
export class InMemoryProductsService implements InMemoryDbService {
  createDb() {
    let products = [
      {id: 11, name: 'Mr. Nice', calories: 100, categoryId: 11},
      {id: 12, name: 'Narco', calories: 150, categoryId: 11},
      {id: 13, name: 'Bombasto', calories: 140, categoryId: 14},
      {id: 14, name: 'Celeritas', calories: 120, categoryId: 13},
      {id: 15, name: 'Magneta', calories: 110, categoryId: 12},
      {id: 16, name: 'RubberMan', calories: 90, categoryId: 11},
      {id: 17, name: 'Dynama', calories: 105, categoryId: 12},
      {id: 18, name: 'Dr IQ', calories: 124, categoryId: 14},
      {id: 19, name: 'Magma', calories: 167, categoryId: 13},
      {id: 20, name: 'Tornado', calories: 198, categoryId: 12}
    ];
    let categories = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'}
    ];
    // return {categories};
    return {products,categories};
  }
}
