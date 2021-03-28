import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-register',
  templateUrl: './radio-register.component.html',
  styleUrls: ['./radio-register.component.css']
})
export class RadioRegisterComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
