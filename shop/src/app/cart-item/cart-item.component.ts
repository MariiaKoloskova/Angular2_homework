import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Product } from '../products/product';
import { CartProduct } from './cart-product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {

  constructor() { }
  @Output()
  productToRemove: EventEmitter<CartProduct> = new EventEmitter<CartProduct>();
  
  @Input()
  product: CartProduct;

  cls: string = "";

  ngOnInit() {
    this.product.quantity = 1;
  }

  ngOnDestroy(): void {
    alert("You removed " + this.product.product.name + " from cart.");
    console.log('Cart item destroyed :(');
  }

  increaseQuantity(){
    this.product.quantity++;
  }

  decreaseQuantity()
  {
    if (this.product.quantity > 1)
      this.product.quantity--;
  }

  removeProduct(product : CartProduct)
  {
    this.productToRemove.emit(product);
  }

  @HostListener('mouseenter', ['$event']) onMouseEnter(event) {
    this.cls = "filled";
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(event) {
    this.cls = "";
  }
}
