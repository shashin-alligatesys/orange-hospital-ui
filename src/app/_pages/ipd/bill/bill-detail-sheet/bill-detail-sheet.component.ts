import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-detail-sheet',
  templateUrl: './bill-detail-sheet.component.html',
  styleUrls: ['./bill-detail-sheet.component.css']
})
export class BillDetailSheetComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    console.log("form", this.form);


  }

}
