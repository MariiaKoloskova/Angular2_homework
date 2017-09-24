import { Component } from '@angular/core';
import { OnInit, ViewChild } from '@angular/core';
import { Product } from './product';
import { ProductsServiceService } from './products-service.service';
import { CartService } from './cart/cart.service';
import { CartComponent } from './cart/cart.component';
import { Category } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductsServiceService, CartService],
})

export class AppComponent implements OnInit {
  constructor(private productsService: ProductsServiceService, 
    private cartService: CartService){};

  title = 'Awesome shop';
  products : Product[];
  @ViewChild(CartComponent) cart: CartComponent;

  ngOnInit():void{
    this.products = this.productsService.getProducts();
  }

  onBuy(productName){
    console.log("Bingo! Somebody bougt our product!");
    var productToBuy = this.products.find(prod => prod.name == productName);
    this.cartService.addProducts(productToBuy);
    this.cart.refreshProductsInCart();
  }

  getCategoryName(id:number):any
  {
        return Category[id];
  }
}
