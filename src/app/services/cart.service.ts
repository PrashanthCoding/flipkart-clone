import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: any[] = [];

  constructor() {
    this.loadCart(); // 🔥 load when app starts
  }

  /* LOAD CART FROM STORAGE */
  loadCart() {
    const data = localStorage.getItem('cart');

    if (data) {
      this.items = JSON.parse(data);
    }
  }

  /* SAVE CART */
  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  /* ADD */
  add(product: any) {
    const existing = this.items.find((p) => p.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }

    this.saveCart();
  }

  /* GET */
  getItems() {
    return this.items;
  }

  /* INCREASE */
  increase(item: any) {
    item.quantity++;
    this.saveCart();
  }

  /* DECREASE */
  decrease(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.saveCart();
    }
  }

  /* REMOVE */
  remove(index: number) {
    this.items.splice(index, 1);
    this.saveCart();
  }

  /* CLEAR */
  clear() {
    this.items = [];
    this.saveCart();
  }

  /* TOTAL */
  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
