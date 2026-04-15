import { Routes } from '@angular/router';
import { Cart } from './pages/cart/cart';
import { Home } from './pages/home/home';
import { Orders } from './pages/orders/orders';
import { Products } from './pages/products/products';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'product/:id', component: Products },
  { path: 'cart', component: Cart },
  { path: 'orders', component: Orders },
];
