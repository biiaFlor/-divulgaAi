import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cad-product',
  templateUrl: './cad-product.component.html',
  styleUrls: ['./cad-product.component.scss']
})
export class CadProductComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute, private fb: FormBuilder, private productService: ProductService, private router: Router) { }

  formGroup = {} as FormGroup;

  categorias = [] as any[];

  id = 0;

  isEdit = false;

  product: any;

  ngOnInit(): void {
    this.categorias = this.actRoute.snapshot.data['categorias'];


    this.formGroup = this.fb.group({
      name: [''],
      description: [''],
      category_id: ['1'],
      value: [0]
    });

    this.id = this.actRoute.snapshot.params['id'];

    if(this.id) {

      this.isEdit = true;

      this.productService.getById(this.id).subscribe((prod: any) => {
        this.product = prod[0];
        this.formGroup.get('name')?.setValue(prod[0].name);
        this.formGroup.get('description')?.setValue(prod[0].description);
        this.formGroup.get('category_id')?.setValue(prod[0].category_id);
        this.formGroup.get('value')?.setValue(prod[0].value);
      })
    }

  }

  onClickSalvar() {
    if(!this.isEdit) {
      this.productService.create(this.formGroup.getRawValue()).subscribe(e => {
        this.router.navigate(['/product/mine'])
      })
    } else {
      console.log(this.product);
      
      this.productService.update({...this.formGroup.getRawValue(), id: this.product.id, userId: this.product.user_id}).subscribe(e => {
        this.router.navigate(['/product/mine'])
      })
    }
  }

  onClickExcluir() {
    this.productService.delete(this.id).subscribe(prod => {
      this.router.navigate(['/product/mine']);
    });
  }

}
