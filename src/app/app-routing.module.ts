import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { ShowCompanyComponent } from './company/show-company/show-company.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ShowProductComponent } from './product/show-product/show-product.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'all_companies', component: CompanyComponent },
  { path: 'company/id', component: ShowCompanyComponent },
  { path: 'product/id', component: ShowProductComponent },
  { path: 'all_products', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
