import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AdmissionService } from '../../../../_service/reception/reception_reception/admission.service'
import { RegistrationService } from '../../../../_service/reception/reception_reception/registration.service';
import { BedmasterService } from '../../../../_service/static/bedmaster.service';
import { OrganizationMasterService } from '../../../../_service/static/organization-master.service';
import { DoctorReferenceService } from '../../../../_service/static/doctor-reference.service';
import { ConsultantMasterService } from '../../../../_service/static/consultant-master.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  constructor(private service:AdmissionService,
    private registrationService:RegistrationService,
    private bedmasterService:BedmasterService,
    private organizationMasterService:OrganizationMasterService,
    private doctorReferenceService:DoctorReferenceService,
    private consultantMasterService:ConsultantMasterService) { }

  form: any = {};
  isSubmit = false;
  isEdit = false;
  table_data: any = [];
  ageString = "";
  isInsurence = false
  spinner = false
  BedList: any = [];
  OrganizationList: any = [];
  DoctorReferenceList: any = [];
  ConsultantList: any = [];
  ipdEdit = 0;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    // this.form.uhid = 0
    this.form.date = new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString().split('T')[0]
    this.onTable(0)
    this.getNextIPD()
    this.getBedList()
    this.getOrganizationList()
    this.getDoctorReferenceList()
    this.getConsultantList()
    this.insurenceShowHide()
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

  getDoctorReferenceList(): void{
    this.doctorReferenceService.getDoctorReferenceList().subscribe(
      data => {
        this.DoctorReferenceList = data.body
      },
      err => {
        console.error(err)
      }
    );
  }
  
  getBedList(): void{
    this.bedmasterService.getBedList().subscribe(
      data => {
        this.BedList = data.body
      },
      err => {
        console.error(err)
      }
    );
  }

  getOrganizationList(): void{
    this.organizationMasterService.getOrganizationList().subscribe(
      data => {
        this.OrganizationList = data.body
      },
      err => {
        console.error(err)
      }
    );
  }
  

  getClass(): void{
        this.form.class =  this.BedList.find((e: { bedno: string; }) => e.bedno == this.form.bedno).wardname
        this.form.wardname = this.BedList.find((e: { bedno: string; }) => e.bedno == this.form.bedno).wardname
  }

  insurenceShowHide(): void{
    console.log(this.form.typeofPatient)
    if(this.form.typeofPatient == "Insurence"){
      this.isInsurence = true
    }else if(this.form.typeofPatient == "Direct"){
      this.isInsurence = false
      this.form.insuranceCom = null
      this.form.inc_Ex = null
      this.form.tpaname = null
      this.form.claimno = null
      this.form.policyno = null
    }else{
      this.form.typeofPatient = "Direct"
    }
  }

  getPatientDetails(): void{
    let ipd = this.form.ipdno
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
            this.form.ipdno = ipd
          }else{
            this.form = data.body
            this.form.patientName = data.body.name
            this.form.ipdno = ipd
            this.form.refBy1 =  data.body.referredBy
            this.form.consultant1 = data.body.consultant
            this.form.date = new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString().split('T')[0]
          }
          this.spinner = false;
        },
        err => {
          console.error(err)
        }
      );
    }
  }

  getNextIPD(): void{
    this.service.getNextIPD().subscribe(
      data => {
        this.form.ipdno = data.body
      },
      err => {
        console.error(err)
      }
    );
  }

  
  onTable(flag): void {
    if (flag == 0) {
      var currentDate = new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString().split('T')[0]
      this.service.getByDate(currentDate).subscribe(
        data => {
          this.table_data = data.body
        },
        err => {
          console.error(err)
        }
      );
    }
    if (flag == 1) {
      this.service.get().subscribe(
        data => {
          this.table_data = data.body
        },
        err => {
          console.error(err)
        }
      );
    }
    if (flag == 2) {
      this.service.getByDate(this.form.getByDate).subscribe(
        data => {
          this.table_data = data.body
        },
        err => {
          console.error(err)
        }
      );
    }
  }
  
  onEdit(row): void {
    this.form = {};
    window.scrollTo(0, 0);
    this.form = row
    this.isEdit = true;
    this.form.class = this.form.wardname
    this.ipdEdit = this.form.ipdno
    this.insurenceShowHide()
  }
  onDelete(id): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want this!",
      icon: 'warning',
      width: 300,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
      this.service.delete(id).subscribe(
        data => {
          if (data.status == 200) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Data Deleted Success',
                icon: 'success',
                confirmButtonText: 'OK',
                width: 300,
                timer: 1500
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.reload();
                }
              });
            }
        },
        err => {
          console.error(err)
        }
      );
    }
    })
  }

  onNew(): void {
    window.location.assign(window.location.href)
    
  }
  onSave(): void {
    console.log(this.isEdit)
    if (this.isEdit) {
      this.onUpdate();
    } else {
      this.onSubmit();
    }
  }
  onSubmit(): void {
    this.isSubmit = true;
    this.service.save(this.form).subscribe(
      data => {
        this.isSubmit = false;
        if (data.status == 200) {
          Swal.fire({
            title: 'Success!',
            text: data.message,
            icon: 'success',
            confirmButtonText: 'OK',
            width: 300
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        } else {
          var error = "";
          error += data.message + '\n'
          if (data.fieldErrorMessageList != null) {
            for (var ob of data.fieldErrorMessageList) {
              error += ob.fieldName + " : " + ob.errorMessage + '\n'
            }
          }
          Swal.fire({
            title: 'Error!',
            text: data.message,
            html: '<pre>' + error + '</pre>',
            icon: 'error',
            confirmButtonText: 'OK',
            width: 350
          })
        }
      },
      err => {
        this.isSubmit = false;
        console.error(err);
      }
    )
  }

  onUpdate(): void {
    this.isSubmit = true;
    this.service.update(this.form).subscribe(
      data => {
        this.isSubmit = false;
        if (data.status == 200) {
          Swal.fire({
            title: 'Success!',
            text: data.message,
            icon: 'success',
            confirmButtonText: 'OK',
            width: 300
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        } else {
          var error = "";
          error += data.message + '\n'
          if (data.fieldErrorMessageList != null) {
            for (var ob of data.fieldErrorMessageList) {
              error += ob.fieldName + " : " + ob.errorMessage + '\n'
            }
          }
          Swal.fire({
            title: 'Error!',
            text: data.message,
            html: '<pre>' + error + '</pre>',
            icon: 'error',
            confirmButtonText: 'OK',
            width: 350
          })
        }
      },
      err => {
        this.isSubmit = false;
        console.error(err);
      }
    )
  }
  
  getPdf(id,type): void {
		if(id !=null && id !="undefined"){
      this.service.printReport('pdf',id,type).subscribe(
        data => {
        const fileURL = URL.createObjectURL(data);
        window.open(fileURL, '_blank');
        },
        err => {
        console.log(err)
        }
      );
      }
  }


}
