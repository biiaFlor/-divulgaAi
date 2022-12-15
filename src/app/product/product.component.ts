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

  produtosCategoria = {} as any;

  ngOnInit(): void {

    this.produtos = this.actRoute.snapshot.data['produtos'];
    this.categorias = this.actRoute.snapshot.data['categorias'];

    this.produtos.forEach(prod => {
      this.produtosCategoria[prod.category] = (this.produtosCategoria[prod.category]?.length) ? [...this.produtosCategoria[prod.category], prod] : [prod];
    });

    this.produtosCategoria = Object.entries(this.produtosCategoria);

    console.log(this.produtosCategoria);
    

  }

}
