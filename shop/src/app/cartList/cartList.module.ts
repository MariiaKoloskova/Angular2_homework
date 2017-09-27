import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CartListComponent } from './cartList.component';
import { CartService } from './cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  providers:[CartService],
  declarations: [CartListComponent, CartItemComponent],
  bootstrap: [CartListComponent],
  exports: [CartListComponent]
})
export class CartModule { }
