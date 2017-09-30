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
      this.cartProducts.push(cartProd);
    }
  }

  addProductsWithCount(product : Product, count : number): void {
    var cartProduct = this.cartProducts.find(p => p.product.name == product.name);
    if (cartProduct){
      cartProduct.quantity = count;
    } else {
      var cartProd : CartProduct = new CartProduct;
      cartProd.product = product;
      cartProduct.quantity = count;
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

  clearCart()
  {
    this.cartProducts = new Array<CartProduct>();
  }

  getTotalCost(): number {
    if (this.cartProducts.length > 0)
      return this.cartProducts.map(p => p.product.price * p.quantity).reduce((a, b) => a + b);
    return 0;
   }

   getTotalCount(): number {
    return this.cartProducts.length;
   } 

   increaseQuantity(product : CartProduct){
    product.quantity++;
  }

  decreaseQuantity(product : CartProduct)
  {
    if (product.quantity > 1)
      product.quantity--;
  }

}
