import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-register',
  templateUrl: './lab-register.component.html',
  styleUrls: ['./lab-register.component.css']
})
export class LabRegisterComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
