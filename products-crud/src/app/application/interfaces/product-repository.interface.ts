import { InjectionToken } from "@angular/core";
import { Product } from "../../domain/models/product.model";

export interface  IProductRepository {
  getAll(): Product[];
  getById(id: number): Product | undefined;
  add(product: Product): void;
  update(product: Product): void;
  delete(id: number): void;
}

export const PRODUCT_REPOSITORY = new InjectionToken<IProductRepository>('PRODUCT_REPOSITORY');
