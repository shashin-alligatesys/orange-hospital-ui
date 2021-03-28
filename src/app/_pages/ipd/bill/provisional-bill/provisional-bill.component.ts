import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provisional-bill',
  templateUrl: './provisional-bill.component.html',
  styleUrls: ['./provisional-bill.component.css']
})
export class ProvisionalBillComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
