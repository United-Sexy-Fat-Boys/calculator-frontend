/* tslint:disable:no-unused-variable */

import {TestBed, inject} from "@angular/core/testing";
import {InMemoryProductsService} from "./in-memory-products.service";

describe('Service: InMemoryData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryProductsService]
    });
  });

  it('should ...', inject([InMemoryProductsService], (service: InMemoryProductsService) => {
    expect(service).toBeTruthy();
  }));
});
