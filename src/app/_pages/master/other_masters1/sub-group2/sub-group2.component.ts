import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-group2',
  templateUrl: './sub-group2.component.html',
  styleUrls: ['./sub-group2.component.css']
})
export class SubGroup2Component implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
