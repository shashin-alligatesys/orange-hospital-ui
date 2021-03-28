import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash-dues',
  templateUrl: './cash-dues.component.html',
  styleUrls: ['./cash-dues.component.css']
})
export class CashDuesComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
