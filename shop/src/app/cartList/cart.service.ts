import { Injectable } from '@angular/core';
import { Product } from '../products/product';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartProduct } from '../cart-item/cart-product';

@Injectable()
export class CartService {

  constructor() {
    this.cartProducts = new Array<CartProduct>();
  }

  cartProducts: CartProduct[];

  getProducts(): CartProduct[] {
    return this.cartProducts;
  }  

  addProducts(product : Product): void {
    var cartProduct = this.cartProducts.find(p => p.product.name == product.name);
    if (cartProduct){
      cartProduct.quantity++;
    } else {
      var cartProd : CartProduct = new CartProduct;
      cartProd.product = product;
      cartProd.quantity = 1;
      this.cartProducts.push(cartProd);
    }
  }

  removeProduct(product : CartProduct)
  {
    var index = this.cartProducts.indexOf(product);
    if (index !== -1) {
       this.cartProducts.splice(index, 1);
    } 
  }

  getTotalCost(): number {
    return this.cartProducts.map(p => p.product.price * p.quantity).reduce((a, b) => a + b);
   }

   getTotalCount(): number {
    return this.cartProducts.length;
   } 
}
