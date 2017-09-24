export class Product {
    name: string
    description: string
    price: number;
    isAvailable: boolean;
    category:Category;
    ingredients: string[];
    equivalents: string[];
}

export enum Category {
    Grocery = 1,
    Drinks,
    Bakery,
  }