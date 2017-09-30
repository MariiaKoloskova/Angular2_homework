import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Product } from './product';
import { Category } from './product';
import { ProductsServiceService } from './products-service.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  providers: [ProductsServiceService, CurrencyPipe]
})

export class ProductListComponent implements OnInit {

  products : Product[];
  
  @Output()
  selectedProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private productsService: ProductsServiceService) { }

  ngOnInit():void{
    this.products = this.productsService.getProducts();
  }

  onBuy(product){
    console.log("Bingo! Somebody bougt our product!");
    this.selectedProduct.emit(product);
  }

  getCategoryName(id:number):any
  {
        return Category[id];
  }

}
