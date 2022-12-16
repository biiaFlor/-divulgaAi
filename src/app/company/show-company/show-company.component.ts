import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/seguranca/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-show-company',
  templateUrl: './show-company.component.html',
  styleUrls: ['./show-company.component.scss']
})
export class ShowCompanyComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute, private router: Router, private authService: AuthService, private productService: ProductService) { }

  id = 0;

  empresas = [] as any[];

  empresa = {} as any;

  ngOnInit(): void { 

    
    this.id = this.actRoute.snapshot.params['id'];
    
    if(this.id) {

      this.productService.allUser(this.id).subscribe((prods: any) => {
        this.empresas = prods
      });

      this.empresas = this.actRoute.snapshot.data['empresas'];
      this.authService.getUser(this.id).subscribe(emp => {
        this.empresa = emp;
      });

      this.actRoute.params.subscribe(params => {
        this.authService.getUser(params['id']).subscribe(emp => {
          this.empresa = emp;
        });
      });

    } else {
      this.router.navigate(['/home']);
    }

  }

}
