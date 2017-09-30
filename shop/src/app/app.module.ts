import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CartModule } from './cartList/cartList.module';
import { ProductsServiceService } from './products/products-service.service';
import { AppComponent } from './app.component';
import { CartListComponent } from './cartList/cartList.component';
import { ProductsModule } from './products/products.module';
import { ConstantsService } from './constants/constants.service';
import { GeneratorFactory, Random } from './generator/generator-factory';
import { GeneratorService } from './generator/generator.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductsModule
  ],
  providers: [
    ProductsServiceService, 
    {
      provide: ConstantsService, 
      useValue : { App: "TaskManager", Ver: "1.0" }
    },
    { provide: Random, 
      useFactory:  GeneratorFactory(3), 
      deps: [GeneratorService] 
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
