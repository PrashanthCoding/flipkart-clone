import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private ps: ProductService,
    private cart: CartService,
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.ps.getProduct(id);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addToCart() {
    this.cart.add(this.product);
    alert('Added to cart');
  }
}
