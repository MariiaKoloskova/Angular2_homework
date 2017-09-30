import { Component, OnInit, Input,Output, EventEmitter, HostListener } from '@angular/core';
import { Product } from '../products/product';
import { CartProduct } from './cart-product';
import { CartService } from '../cartList/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})

export class CartItemComponent implements OnInit {

  constructor(private cartListService: CartService) { }

  @Output()
  updateTotals: EventEmitter<any> = new EventEmitter<any>();
  
  @Input()
  product: CartProduct;

  cls: string = "";

  ngOnInit() {
    this.product.quantity = 1;
    this.updateTotals.emit();
  }

  ngOnDestroy(): void {
    alert("You removed " + this.product.product.name + " from cart.");
    console.log('Cart item destroyed :(');
  }

  increaseQuantity(){
    this.cartListService.increaseQuantity(this.product);
    this.updateTotals.emit();
  }

  decreaseQuantity()
  {
    this.cartListService.decreaseQuantity(this.product);
    this.updateTotals.emit();
  }

  removeProduct(product : CartProduct)
  {
    this.cartListService.removeProduct(this.product);
    this.updateTotals.emit();
  }

  @HostListener('mouseenter', ['$event']) onMouseEnter(event) {
    this.cls = "filled";
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(event) {
    this.cls = "";
  }
}
