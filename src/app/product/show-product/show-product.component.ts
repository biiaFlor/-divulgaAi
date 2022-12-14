import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent implements OnInit {

  constructor(private router: Router,private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  id: any;

  produto: any;

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];

    if(this.id) {

      this.productService.getById(this.id).subscribe(prod => {
        this.produto = prod;
      });

    } else {
      this.router.navigate(['/all_products']);
    }

  }

}
