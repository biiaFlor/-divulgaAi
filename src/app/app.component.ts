import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './register/register.component.html',
  styleUrls: ['./register/register.component.scss']
})

export class AppComponent {
  title = 'DivulgaAi';

  constructor(private modalService: NgbModal) {
  }

  open(modal: any): void {
    this.modalService.open(modal);
  }
}
