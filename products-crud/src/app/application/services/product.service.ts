import { Inject, Injectable } from '@angular/core';
import { IProductRepository, PRODUCT_REPOSITORY } from '../interfaces/product-repository.interface';
import { Product } from '../../domain/models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(@Inject(PRODUCT_REPOSITORY) private repo: IProductRepository) {}

  getAll(): Product[] {
    return this.repo.getAll();
  }

  getById(id: number): Product | undefined {
    return this.repo.getById(id);
  }

  add(product: Product): void {
    this.repo.add(product);
  }

  update(product: Product): void {
    this.repo.update(product);
  }

  delete(id: number): void {
    this.repo.delete(id);
  }
}
