import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ipd-test',
  templateUrl: './ipd-test.component.html',
  styleUrls: ['./ipd-test.component.css']
})
export class IpdTestComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
