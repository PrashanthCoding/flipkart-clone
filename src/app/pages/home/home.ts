import { CommonModule } from '@angular/common';
import { Component, DoCheck } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductService } from '../../services/product.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home',
  imports: [ProductCard, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements DoCheck {
  products: any[] = [];
  filteredProducts: any[] = [];

  constructor(
    private productService: ProductService,
    private searchService: SearchService,
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  ngDoCheck() {
    const search = this.searchService.getSearch();

    this.filteredProducts = this.products.filter((p) => p.name.toLowerCase().includes(search));
  }
}
