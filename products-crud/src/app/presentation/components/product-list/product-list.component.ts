import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../application/services/product.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../../domain/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
   imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private service: ProductService, private router: Router) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.products = this.service.getAll();
  }

  delete(id: number) {
    this.service.delete(id);
    this.load();
  }

  goToForm(id?: number) {
    if (id) this.router.navigate(['/form', id]);
    else this.router.navigate(['/form']);
  }
}
