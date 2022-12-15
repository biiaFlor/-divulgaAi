import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  @Input()
  empresa: any;

  constructor() { }

  ngOnInit(): void {
  }

}
