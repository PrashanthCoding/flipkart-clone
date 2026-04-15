import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];

  constructor() {
    this.generateProducts();
  }

  generateProducts() {
    const names = [
      'Charger',
      'Power Bank',
      'Mac Desktop',
      'iPhone 13',
      'Sony HeadPhones',
      'Desktop',
      'Office Chairs',
      'Home Chair',
      'Sofa',
      'Wintage Television',
      'Celing Lights',
      'Camera',
    ];

    for (let i = 1; i <= 12; i++) {
      this.products.push({
        id: i,
        name: names[i - 1],
        price: 1000 * i,
        image: `assets/images/${i}.jpg`,
        description: names[i - 1] + ' best quality product',
      });
    }
  }

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    return this.products.find((p) => p.id === id);
  }
}
