import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../seguranca/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup = {} as FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.formGroup = this.fb.group({
      document: [''],
      password: ['']
    });
  }

  onClickEntrar() {
    this.authService.login(this.formGroup.getRawValue()).subscribe(e => {
      this.router.navigate(['/home']);
    });
  }

}
