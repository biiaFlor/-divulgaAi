import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute) { }

  empresas = [] as any[];
  produtos = [] as any[];

  ngOnInit(): void { 

    this.empresas = this.actRoute.snapshot.data['empresas'];
    this.produtos = this.actRoute.snapshot.data['produtos'];

    console.log(this.empresas);

  }

}
