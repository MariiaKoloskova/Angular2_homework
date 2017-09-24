import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent {

  constructor(private cartService: CartService) {
    this.products = new Array<Product>();
   }

  products: Product[];

 refreshProductsInCart(): void
 {
   this.products = this.cartService.getProducts();
 }
}
