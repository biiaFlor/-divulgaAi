import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute) { }

  empresas = [] as any[];

  ngOnInit(): void { 

    this.empresas = this.actRoute.snapshot.data['empresas'];

  }

}
