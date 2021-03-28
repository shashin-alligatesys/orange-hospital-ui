import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-group1',
  templateUrl: './sub-group1.component.html',
  styleUrls: ['./sub-group1.component.css']
})
export class SubGroup1Component implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
