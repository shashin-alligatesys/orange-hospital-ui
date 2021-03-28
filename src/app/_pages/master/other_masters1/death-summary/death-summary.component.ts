import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-death-summary',
  templateUrl: './death-summary.component.html',
  styleUrls: ['./death-summary.component.css']
})
export class DeathSummaryComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
