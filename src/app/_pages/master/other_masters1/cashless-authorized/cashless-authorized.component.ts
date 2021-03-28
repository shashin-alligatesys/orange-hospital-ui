import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashless-authorized',
  templateUrl: './cashless-authorized.component.html',
  styleUrls: ['./cashless-authorized.component.css']
})
export class CashlessAuthorizedComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
