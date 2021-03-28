import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ipd-register',
  templateUrl: './ipd-register.component.html',
  styleUrls: ['./ipd-register.component.css']
})
export class IpdRegisterComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
