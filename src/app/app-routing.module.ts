import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadProductComponent } from './cad-product/cad-product.component';
import { CompanyComponent } from './company/company.component';
import { ShowCompanyComponent } from './company/show-company/show-company.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { FormProductComponent } from './product/form-product/form-product.component';
import { ProductComponent } from './product/product.component';
import { ShowProductComponent } from './product/show-product/show-product.component';
import { RegisterComponent } from './register/register.component';
import { AllCompaniesResolver } from './resolvers/all-companies.resolver';
import { AllProductsResolver } from './resolvers/all-products.resolver';
import { CategoriesResolver } from './resolvers/categories.resolver';
import { MyProductsResolver } from './resolvers/my-products.resolver';
import { AuthGuard } from './seguranca/auth.guard';
import { CompanyGuard } from './seguranca/company.guard';
import { LoginGuard } from './seguranca/login.guard';
import { TokenInterceptor } from './seguranca/token.interceptor';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'home', component: HomeComponent, resolve: { empresas: AllCompaniesResolver, produtos: AllProductsResolver } },
  { path: 'register', component: RegisterComponent, canActivate: [LoginGuard] },
  { path: 'register/edit', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'company', component: CompanyComponent, canActivate: [AuthGuard]  },
  { path: 'all_companies', component: CompanyComponent, resolve: { empresas: AllCompaniesResolver }},
  { path: 'company/:id', component: ShowCompanyComponent, canActivate: [AuthGuard], resolve: { empresas: AllCompaniesResolver } },
  { path: 'product', component: CadProductComponent, resolve: { categorias: CategoriesResolver }, canActivate: [AuthGuard, CompanyGuard]  },
  { path: 'product/mine', component: MyProductsComponent, resolve: { produtos: MyProductsResolver, categorias: CategoriesResolver }, canActivate: [AuthGuard, CompanyGuard]  },
  { path: 'product/:id', component: ShowProductComponent },
  { path: 'product/id/edit', component: FormProductComponent, canActivate: [AuthGuard]  },
  { path: 'all_products', component: ProductComponent, resolve: { produtos: AllProductsResolver, categorias: CategoriesResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
 }]
})
export class AppRoutingModule { }
