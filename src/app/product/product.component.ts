import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute) { }

  produtos = [] as any[];
  categorias = [] as any[];

  ngOnInit(): void {

    this.produtos = this.actRoute.snapshot.data['produtos'];
    this.categorias = this.actRoute.snapshot.data['categorias'];

    this.produtos = this.produtos.map(prod => {
      const cat = this.categorias.find(c => c.id == prod.category_id);
      return {...prod, category_id: cat.description}
    });


  }

}
