import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../products/product';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartProduct } from '../cart-item/cart-product';

@Component({
  selector: 'app-cartList',
  templateUrl: './cartList.component.html',
  styleUrls: ['./cartList.component.css'],
})

export class CartListComponent {

  constructor(private cartListService: CartService) {}

  cartProducts: CartProduct[] = new Array<CartProduct>();

  refreshProductsInCart(): void {
     this.cartProducts = this.cartListService.getProducts();
  }

 getTotalCost(): number {
  return this.cartListService.getTotalCost();
 }

 getTotalCount(): number {
  return this.cartListService.getTotalCount();
 }

 removeProduct(product : CartProduct)
 {
    this.cartListService.removeProduct(product);
    this.refreshProductsInCart();
 }
}
