import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CartComponent } from './cart.component';
import { CartService } from './cart.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  providers:[CartService],
  declarations: [CartComponent],
  bootstrap: [CartComponent],
  exports: [CartComponent]
})
export class CartModule { }
