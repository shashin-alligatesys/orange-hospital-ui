import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultant-doctor',
  templateUrl: './consultant-doctor.component.html',
  styleUrls: ['./consultant-doctor.component.css']
})
export class ConsultantDoctorComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
