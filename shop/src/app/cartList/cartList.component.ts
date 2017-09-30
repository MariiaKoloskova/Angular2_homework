import { Component, OnInit, Optional } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../products/product';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartProduct } from '../cart-item/cart-product';
import { GeneratorService } from '../generator/generator.service';

@Component({
  selector: 'app-cartList',
  templateUrl: './cartList.component.html',
  styleUrls: ['./cartList.component.css'],
})

export class CartListComponent {

  constructor(
    private cartListService: CartService,
    @Optional() private generatorService: GeneratorService, 
    ) {}

  cartProducts: CartProduct[] = new Array<CartProduct>();
  cartProductsCount:number;
  cartProductsCost:number;

  refreshProductsInCart(): void {
     this.cartProducts = this.cartListService.getProducts();
     this.updateTotals();
  }

  updateTotals(){
    this.cartProductsCost = this.cartListService.getTotalCost(); 
    this.cartProductsCount = this.cartListService.getTotalCount();
  }

 clearCart()
 {
    this.cartListService.clearCart();
    this.refreshProductsInCart();
 }
}
