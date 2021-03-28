import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/_service/reception/reception_reception/registration.service';
import { ConsultantMasterService } from 'src/app/_service/static/consultant-master.service';
import { DoctorReferenceService } from '../../../../_service/static/doctor-reference.service';
import Swal from 'sweetalert2';
import { AdmissionService } from 'src/app/_service/reception/reception_reception/admission.service';
import { OrganizationMasterService } from 'src/app/_service/static/organization-master.service';
import { SubdepartmentService } from 'src/app/_service/master/other_masters1/subdepartment.service';

@Component({
  selector: 'app-opd',
  templateUrl: './opd.component.html',
  styleUrls: ['./opd.component.css']
})
export class OpdComponent implements OnInit {

  constructor(private doctorReferenceService:DoctorReferenceService,
    private consultantMasterService:ConsultantMasterService,
    private registrationService:RegistrationService,
    private admissionService:AdmissionService,
    private organizationMasterService:OrganizationMasterService,
    private subdepartmentService:SubdepartmentService) { }

  form: any = {};
  isSubmit = false;
  DoctorReferenceList: any = [];
  ConsultantList: any = [];
  spinner = false
  OrganizationList: any = [];
  SubDeptList: any = [];

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.form.date = new Date().toISOString().substring(0, 10);
    this.getDoctorReferenceList()
    this.getConsultantList()
    this.getOrganizationList()
    this.getSubDeptList()
    this.form.billType="CASH"
  }

  getSubDeptList(): void{
    this.subdepartmentService.getSubDepartmentByDepartment("17").subscribe(
      data => {
        this.SubDeptList = data.body
        this.form.subDept = 28
      },
      err => {
        console.log(err)
      }
    );
  }

  getOrganizationList(): void{
    this.organizationMasterService.getOrganizationList().subscribe(
      data => {
        this.OrganizationList = data.body
      },
      err => {
        console.log(err)
      }
    );
  }

  getConsultantList(): void{
    this.consultantMasterService.getConsultantList().subscribe(
      data => {
        this.ConsultantList = data.body
      },
      err => {
        console.log(err)
      }
    );
  }

  getDoctorReferenceList(): void{
    this.doctorReferenceService.getDoctorReferenceList().subscribe(
      data => {
        this.DoctorReferenceList = data.body
      },
      err => {
        console.log(err)
      }
    );
  }
  
  getPatientDetails_IPD(): void{
    // let ipd = this.form.ipdno
    if(this.form.ipdno != null && this.form.ipdno.length>=0 && this.form.ipdno != ""){
      this.spinner = true;
      this.admissionService.getPatientDetailsByIPD(this.form.ipdno).subscribe(
        data => {
          if (data.body == null) {
            Swal.fire({
              title: 'Error!',
              text: 'Not Found',
              icon: 'error',
              confirmButtonText: 'OK',
              width: 300
            })
            this.form = {}
          }else{
            this.form = data.body
            // this.form.ipdno = ipd
          }
          this.spinner = false;
        },
        err => {
          console.log(err)
        }
      );
    }
  }

  getPatientDetails_UHID(): void{
    if(this.form.uhid != null && this.form.uhid.length>=0 && this.form.uhid != ""){
      this.spinner = true;
      this.registrationService.getPatientDetailsByUHID(this.form.uhid).subscribe(
        data => {
          if (data.body == null) {
            Swal.fire({
              title: 'Error!',
              text: 'Not Found',
              icon: 'error',
              confirmButtonText: 'OK',
              width: 300
            })
            this.form = {}
          }else{
            this.form = data.body
            this.form.refBy1=data.body.referredBy
            this.form.consultant1=data.body.consultant
            this.form.ptype=data.body.patientType
            
          }
          this.spinner = false;
        },
        err => {
          console.log(err)
        }
      );
    }
  }

  onSubmit(): void {
  }
}
