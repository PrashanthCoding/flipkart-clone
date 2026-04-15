import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  items: any[] = [];
  showToast = false;

  constructor(
    public cart: CartService,
    private orderService: OrderService,
  ) {}

  ngOnInit() {
    this.items = this.cart.getItems();
  }

  increase(item: any) {
    this.cart.increase(item);
  }

  decrease(item: any) {
    this.cart.decrease(item);
  }

  remove(index: number) {
    this.cart.remove(index);
  }

  buyNow() {
    this.orderService.placeOrder(this.items);

    this.cart.clear();
    this.items = [];

    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 2000);
  }
}
