import { Injectable } from '@angular/core';
import { IProductRepository } from '../../application/interfaces/product-repository.interface';
import { Product } from '../../domain/models/product.model';

@Injectable({ providedIn: 'root' })
export class LocalStorageRepository implements IProductRepository {
  private key = 'products';

  private load(): Product[] {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  private save(products: Product[]): void {
    localStorage.setItem(this.key, JSON.stringify(products));
  }

  getAll(): Product[] {
    return this.load();
  }

  getById(id: number): Product | undefined {
    return this.load().find(p => p.id === id);
  }

  add(product: Product): void {
    const products = this.load();
    product.id = Date.now(); // simple id generator
    products.push(product);
    this.save(products);
  }

  update(product: Product): void {
    const products = this.load().map(p => (p.id === product.id ? product : p));
    this.save(products);
  }

  delete(id: number): void {
    const products = this.load().filter(p => p.id !== id);
    this.save(products);
  }
}
