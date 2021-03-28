import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bed-shifting',
  templateUrl: './bed-shifting.component.html',
  styleUrls: ['./bed-shifting.component.css']
})
export class BedShiftingComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
