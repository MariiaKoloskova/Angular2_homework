import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products/product';
import { CartProduct } from './cart-product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  host: {
    '(mouseenter)': 'mouseenter()',
    '(mouseleave)': 'mouseleave()'
  }
})
export class CartItemComponent implements OnInit {

  constructor() { }
  @Output()
  productToRemove: EventEmitter<CartProduct> = new EventEmitter<CartProduct>();
  
  @Input()
  product: CartProduct;

  cls: string = "";

  ngOnInit() {
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

  mouseenter(): void {
    this.cls = "filled";
  }

  mouseleave(): void {
    this.cls = "";
  }
}
