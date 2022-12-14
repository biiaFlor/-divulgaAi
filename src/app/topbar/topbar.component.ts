import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../seguranca/auth.service';
import { TokenService } from '../seguranca/token.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  formGroup = {} as FormGroup;

  constructor(private modalService: NgbModal, public authService: AuthService, public tokenService: TokenService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  open(modal: any): void {
    this.modalService.open(modal);
  }
}
