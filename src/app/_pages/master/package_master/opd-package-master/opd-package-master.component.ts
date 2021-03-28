import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opd-package-master',
  templateUrl: './opd-package-master.component.html',
  styleUrls: ['./opd-package-master.component.css']
})
export class OpdPackageMasterComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
