import { Injectable } from '@angular/core';
import { Product } from './product';
import { Category } from './product';

@Injectable()
export class ProductsServiceService {

  constructor() { }

  getProducts(): Product[] {
    return [
      {
        name: "Pasta", 
        description: "Best world pasta! Buy it right now!", 
        price: 9.99, 
        isAvailable: true, 
        category: Category.Grocery, 
        ingredients:["Durum wheat flour", "Eggs", "Water"], 
        equivalents:["Spaghetti", "Noodles"]
      },
      {
        name: "Pickles", 
        description: "Outstanding Pickles! Try now!", 
        price: 3.05, 
        isAvailable: true, 
        category: Category.Grocery, 
        ingredients:["Cucumbers", "Vinegar", "Brine"], 
        equivalents:["none"]
      },
      {
        name: "Coca-cola", 
        description: "Just Coca-cola", 
        price: 4.59, 
        isAvailable: true, 
        category: Category.Drinks, 
        ingredients:["Carbonated water", "Sugar", "Caffeine", "Phosphoric acid", "Natural flavorings"], 
        equivalents:["Pepsi"]
      },
      {
        name: "Apple juice", 
        description: "Pure apples here.", 
        price: 1.99, 
        isAvailable: false, 
        category: Category.Drinks, 
        ingredients:["Apples", "Sugar", "Water"], 
        equivalents:["Orange juice", "Pineapple juice", "Cherry juice"]
      }    
    ];
  }
}


