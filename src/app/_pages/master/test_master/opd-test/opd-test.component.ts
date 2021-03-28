import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opd-test',
  templateUrl: './opd-test.component.html',
  styleUrls: ['./opd-test.component.css']
})
export class OpdTestComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
