import { Injectable } from '@angular/core';
import { Product } from '../products/product';

@Injectable()
export class CartService {

  constructor() {this.products = new Array<Product>();}
  products: Product[];

  getProducts(): Product[] {
    return this.products;
  }  
  
  addProducts(product : Product): void {
    this.products.push(product);
  }
}
