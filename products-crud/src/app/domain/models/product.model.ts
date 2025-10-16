export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public stock: number
  ) {}

  updateStock(newStock: number): void {
    if (newStock < 0) {
      throw new Error('Stock cannot be negative');
    }
    this.stock = newStock;
  }
}
