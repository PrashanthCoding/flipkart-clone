import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
})
export class ProductCard {
  @Input() product: any;
  showPopup = false;

  constructor(
    private cart: CartService,
    private router: Router,
  ) {}

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  confirmAdd() {
    this.cart.add(this.product);
    this.showPopup = false;
    this.router.navigate(['/cart']);
  }
}
