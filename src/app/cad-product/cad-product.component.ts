import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cad-product',
  templateUrl: './cad-product.component.html',
  styleUrls: ['./cad-product.component.scss']
})
export class CadProductComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute, private fb: FormBuilder, private productService: ProductService, private router: Router) { }

  formGroup = {} as any;

  categorias = [] as any[];

  ngOnInit(): void {
    this.categorias = this.actRoute.snapshot.data['categorias'];

    this.formGroup = this.fb.group({
      name: [''],
      description: [''],
      category_id: ['1'],
      value: [0]
    });

  }

  onClickSalvar() {
    this.productService.create(this.formGroup.getRawValue()).subscribe(e => {
      this.router.navigate(['/product/mine'])
    })
  }

}
