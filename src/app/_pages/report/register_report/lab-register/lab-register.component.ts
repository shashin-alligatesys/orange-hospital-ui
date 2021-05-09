import { Component, OnInit } from '@angular/core';
import { OpdRegisterService } from 'src/app/_service/report/register_report/opd-register.service';
import Swal from 'sweetalert2';
import { OrganizationMasterService } from 'src/app/_service/static/organization-master.service';
import { DoctorReferenceService } from '../../../../_service/static/doctor-reference.service';
import { SubdepartmentService } from 'src/app/_service/master/other_masters1/subdepartment.service';
import { ConsultantMasterService } from '../../../../_service/static/consultant-master.service';

@Component({
  selector: 'app-lab-register',
  templateUrl: './lab-register.component.html',
  styleUrls: ['./lab-register.component.css']
})
export class LabRegisterComponent implements OnInit {

  constructor(
    private opdRegisterService:OpdRegisterService,
    private doctorReferenceService: DoctorReferenceService,
    private subdepartmentService:SubdepartmentService,
    private consultantMasterService:ConsultantMasterService,
    private organizationMasterService:OrganizationMasterService
  ) { }

  form: any = {};
  isSubmit = false;
  OrganizationList:any = [];
  DoctorReferenceList: any = [];
  SubDeptList:any = [];
  ConsultantList: any = [];

  ngOnInit(): void {
    this.getOrganizationList()
    this.getDoctorReferenceList()
    this.getSubDeptList()
    this.getConsultantList()
  }

  getConsultantList(): void{
    this.consultantMasterService.getConsultantList().subscribe(
      data => {
        this.ConsultantList = data.body
      },
      err => {
        console.error(err)
      }
    );
  }

  getSubDeptList(): void {
    this.subdepartmentService.getSubDepartmentByDepartment("84").subscribe(
      data => {
        this.SubDeptList = data.body
        this.form.subDept = 107
      },
      err => {
        console.error(err)
      }
    );
  }

  getDoctorReferenceList(): void {
    this.doctorReferenceService.getDoctorReferenceList().subscribe(
      data => {
        this.DoctorReferenceList = data.body
      },
      err => {
        console.error(err)
      }
    );
  }

  getOrganizationList(): void {
    this.organizationMasterService.getOrganizationList().subscribe(
      data => {
        this.OrganizationList = data.body
      },
      err => {
        console.error(err)
      }
    );
  }
  
  onSubmit(): void {
    this.form.type="lab"
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
