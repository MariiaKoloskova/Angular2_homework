import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './productlist.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
  bootstrap: [ProductListComponent]
})
export class ProductsModule { }
