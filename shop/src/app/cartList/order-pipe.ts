import { Pipe, PipeTransform } from "@angular/core";
import { CartProduct } from "../cart-item/cart-product";


@Pipe({
    name: 'order',
    pure: false 
  })

export class OrderPipe implements PipeTransform  {
    transform(cartList: Array<CartProduct>, field:string, isAscending:boolean): Array<CartProduct> {
    
        return cartList.sort(function(a, b){
            if(a.product[field] < b.product[field]) return isAscending ? -1 : 1;
            if(a.product[field] > b.product[field]) return isAscending ? 1 : -1;
            return 0;
        })
      }
    
}
