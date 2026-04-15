import { Injectable } from '@angular/core';
import { Orders } from '../models/orders';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: Orders[] = [];

  constructor() {
    this.loadOrders();
  }

  loadOrders() {
    const data = localStorage.getItem('orders');

    if (data) {
      const parsed = JSON.parse(data);

      this.orders = parsed.map((o: any) => ({
        ...o,
        date: new Date(o.date),
      }));
    }
  }

  saveOrders() {
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }

  placeOrder(cartItems: any[]) {
    const newOrder: Orders = {
      id: Date.now(),
      items: [...cartItems],
      total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      date: new Date(),
      status: 'Placed',
    };

    this.orders.push(newOrder);
    this.saveOrders();
  }

  getOrders() {
    return this.orders;
  }
}
