import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacant-bed',
  templateUrl: './vacant-bed.component.html',
  styleUrls: ['./vacant-bed.component.css']
})
export class VacantBedComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }
}
