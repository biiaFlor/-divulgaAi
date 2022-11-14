import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  open(modal: any): void {
    this.modalService.open(modal);
  }
}
