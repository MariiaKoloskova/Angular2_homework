import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CartListComponent } from './cartList.component';
import { CartService } from './cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { FontDirective } from '../directives/font-directive';

@NgModule({
  imports: [
    BrowserModule
  ],
  
  providers:[CartService],
  declarations: [CartListComponent, CartItemComponent, FontDirective],
  bootstrap: [CartListComponent],
  exports: [CartListComponent]
})
export class CartModule { }
