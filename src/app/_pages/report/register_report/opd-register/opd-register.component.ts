import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opd-register',
  templateUrl: './opd-register.component.html',
  styleUrls: ['./opd-register.component.css']
})
export class OpdRegisterComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
