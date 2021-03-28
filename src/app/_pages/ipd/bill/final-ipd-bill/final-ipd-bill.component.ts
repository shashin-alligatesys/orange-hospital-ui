import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-ipd-bill',
  templateUrl: './final-ipd-bill.component.html',
  styleUrls: ['./final-ipd-bill.component.css']
})
export class FinalIpdBillComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
