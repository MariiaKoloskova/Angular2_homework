import { Component } from '@angular/core';
import { OnInit, ViewChild } from '@angular/core';
import { Product } from './products/product';
import { Category } from './products/product';
import { ProductsServiceService } from './products/products-service.service';
import { CartService } from './cartList/cart.service';
import { CartListComponent } from './cartList/cartList.component';
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
  @ViewChild(CartListComponent) cart: CartListComponent;

  buyProduct(product) {
    this.cartService.addProducts(product);
    this.cart.refreshProductsInCart();
    var xxxMap = {};
    
    xxxMap['key1'] = 'value 1';
    xxxMap['key2'] = 5;
    console.log("Key 1 : " + xxxMap['key1'] + "  " + Object.keys(xxxMap).length);
    delete xxxMap['key1'];
    console.log(Object.keys(xxxMap).length);
  }
}
