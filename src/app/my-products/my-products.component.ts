import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute) { }

  @Input()
  produtos = [] as any[];

  categorias = [] as any[];

  ngOnInit(): void {

    this.produtos = this.actRoute.snapshot.data['produtos'];
    this.categorias = this.actRoute.snapshot.data['categorias'];


  }

}
