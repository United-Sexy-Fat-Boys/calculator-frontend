/* tslint:disable:no-unused-variable */

import {addProviders} from "@angular/core/testing";
import {Product} from "./product";

describe('Product', () => {
  it('should createProduct an instance', () => {
    expect(new Product()).toBeTruthy();
  });
});
