import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  open(modal: any): void {
    this.modalService.open(modal);
  }
}
