import { Component } from '@angular/core';
import { OnInit, ViewChild, Optional } from '@angular/core';
import { Product } from './products/product';
import { Category } from './products/product';
import { ProductsServiceService } from './products/products-service.service';
import { CartService } from './cartList/cart.service';
import { CartListComponent } from './cartList/cartList.component';
import { ProductListComponent } from './products/productlist.component';
import { ConfigOptionsService } from './config-options/config-options.service';
import { LocalStorageService } from './local-storage/local-storage.service';
import { Random, GeneratorFactory } from './generator/generator-factory';
import { GeneratorService } from './generator/generator.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ 
    { 
      provide: Random, 
      useFactory:  GeneratorFactory(3), 
      deps: [GeneratorService] 
  } ] 
})

export class AppComponent {
  constructor(
    private productsService: ProductsServiceService, 
    private cartService: CartService,
    @Optional() private configService: ConfigOptionsService,
    @Optional() private localStorageService: LocalStorageService,
  ){};

  title = 'Awesome shop';
  currentDay: string = new DatePipe("en").transform(Date.now(), "EEEE");
  
  @ViewChild(CartListComponent) cart: CartListComponent;

  buyProduct(product) {
    this.cartService.addProducts(product);
    this.cart.refreshProductsInCart();
  }
}
