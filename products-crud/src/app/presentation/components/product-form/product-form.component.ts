import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../application/services/product.service';
import { Product } from '../../../domain/models/product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  model: Product = new Product(0, '', 0, 0);
  isEdit = false;

  constructor(
    private service: ProductService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const prod = this.service.getById(id);
      if (prod) {
        this.model = prod;
        this.isEdit = true;
      }
    }
  }

  save() {
    if (this.isEdit) this.service.update(this.model);
    else this.service.add(this.model);
    this.router.navigate(['/']);
  }
}
