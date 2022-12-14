import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../seguranca/auth.service';
import { TokenService } from '../seguranca/token.service';
import { CepService } from './cep.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService, private cepService: CepService, private router: Router, private tokenService: TokenService) { }

  formGroup = {} as FormGroup;

  isPessoaJuridica = false;

  file = {} as any;

  formEdit = false;

  ngOnInit(): void {
    this.criarForm();

    if(this.router.url.includes('edit')) {

      this.formEdit = true;

      this.preencherCampos();

      this.isPessoaJuridica = this.tokenService.getUser().is_company;

    } else {
      this.formGroup.get('is_company')?.valueChanges.subscribe(value => {
        this.isPessoaJuridica = value;
        this.file = null;
        if(!value) this.formGroup.get('description')?.setValue('');
      });
    }


  }

  criarForm() {
    this.formGroup = this.fb.group({
      document: [''],
      is_company: [false],
      name: [''],
      date: [''],
      cep: [''],
      image: [''],
      description: [''],
      email: [''],
      password: [''],
      city: [''],
      state: ['']
    });

  }

  preencherCampos() {
    this.formGroup.get('document')?.setValue(this.tokenService.getUser().document);
    this.formGroup.get('is_company')?.setValue(this.tokenService.getUser().is_company);
    this.formGroup.get('name')?.setValue(this.tokenService.getUser().name);
    this.formGroup.get('date')?.setValue(this.tokenService.getUser().date);
    this.formGroup.get('cep')?.setValue(this.tokenService.getUser().cep);
    this.formGroup.get('image')?.setValue(Object.keys(this.tokenService.getUser().image || {}).length ? '' : '');
    this.formGroup.get('description')?.setValue(this.tokenService.getUser().description);
    this.formGroup.get('email')?.setValue(this.tokenService.getUser().email);
    this.formGroup.get('password')?.setValue(this.tokenService.getUser().password);
    this.formGroup.get('city')?.setValue(this.tokenService.getUser().city);
    this.formGroup.get('state')?.setValue(this.tokenService.getUser().state);
  }

  onBlurCep() {
    this.cepService.getAddress(this.formGroup.get('cep')?.value).subscribe((value: any) => {
      this.formGroup.get('city')?.setValue(value.localidade);
      this.formGroup.get('state')?.setValue(value.uf);
    });
  }

  onChange($event: any) {
    this.file = $event.target.files[0];
  }

  onClickSalvar() {
    
    if(this.formEdit) {
      const userObj = {
        ...this.formGroup.getRawValue(),
        image: ''//this.file
      }

      delete userObj.email;
      delete userObj.password;
      delete userObj.document;

      this.authService.update(userObj).subscribe(e => {
        this.router.navigate(['/home']);
      });
    } else {
      const userObj = {
        ...this.formGroup.getRawValue(),
        image: ''//this.file
      }
      this.authService.register(userObj).subscribe({
        next: e => {
          this.router.navigate(['/home']);
        },
        error: err => {
          //console.log(err)
        }
      });
    }

    
  }


}
