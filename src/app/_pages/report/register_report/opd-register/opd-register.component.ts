import { Component, OnInit } from '@angular/core';
import { OpdRegisterService } from 'src/app/_service/report/register_report/opd-register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-opd-register',
  templateUrl: './opd-register.component.html',
  styleUrls: ['./opd-register.component.css']
})
export class OpdRegisterComponent implements OnInit {

  constructor(
    private opdRegisterService:OpdRegisterService
  ) { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    this.form.type="opd"
    this.form.format="pdf"
    console.log(this.form)
    this.opdRegisterService.printReport(this.form).subscribe(
      data => {
        if (data.size == 0) {
          Swal.fire({
            title: 'Error!',
            html: '<i>Data Not Found OR Error !</i>',
            icon: 'error',
            confirmButtonText: 'OK',
            width: 350
          })
        } else {
          console.log(data)
          const fileURL = URL.createObjectURL(data);
          window.open(fileURL, '_blank');
        }
      },
      err => {
        console.log(err)
      }
    );
  }

}
