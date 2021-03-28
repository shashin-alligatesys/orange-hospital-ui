import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-group',
  templateUrl: './super-group.component.html',
  styleUrls: ['./super-group.component.css']
})
export class SuperGroupComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
