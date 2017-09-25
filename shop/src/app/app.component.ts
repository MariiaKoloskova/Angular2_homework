import { Component } from '@angular/core';
import { OnInit, ViewChild } from '@angular/core';
import { Product } from './products/product';
import { Category } from './products/product';
import { ProductsServiceService } from './products/products-service.service';
import { CartService } from './cart/cart.service';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './products/productlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  constructor(private productsService: ProductsServiceService, 
    private cartService: CartService){};

  title = 'Awesome shop';
  @ViewChild(CartComponent) cart: CartComponent;

  buyProduct(product) {
    this.cartService.addProducts(product);
    this.cart.refreshProductsInCart();
  }
}
