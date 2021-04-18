import { Component, OnInit } from '@angular/core';
import { OpdBillService } from 'src/app/_service/reception/reception_bill/opd.service';
import { RegistrationService } from 'src/app/_service/reception/reception_reception/registration.service';
import { ConsultantMasterService } from 'src/app/_service/static/consultant-master.service';
import { DoctorReferenceService } from '../../../../_service/static/doctor-reference.service';
import Swal from 'sweetalert2';
import { AdmissionService } from 'src/app/_service/reception/reception_reception/admission.service';
import { OrganizationMasterService } from 'src/app/_service/static/organization-master.service';
import { SubdepartmentService } from 'src/app/_service/master/other_masters1/subdepartment.service';
import { GroupService } from 'src/app/_service/master/other_masters1/group.service';
import { OpdService } from 'src/app/_service/master/test_master/opd.service';
import { PlasticMoneyMasterService } from 'src/app/_service/master/other_masters1/plastic-money-master.service';
import { ConcessionService } from 'src/app/_service/master/other_masters1/concession.service';

@Component({
  selector: 'app-opd',
  templateUrl: './opd.component.html',
  styleUrls: ['./opd.component.css']
})
export class OpdComponent implements OnInit {

  constructor(private doctorReferenceService: DoctorReferenceService,
    private service: OpdBillService,
    private consultantMasterService: ConsultantMasterService,
    private registrationService: RegistrationService,
    private admissionService: AdmissionService,
    private organizationMasterService: OrganizationMasterService,
    private subdepartmentService: SubdepartmentService,
    private groupService: GroupService,
    private opdService: OpdService,
    private plasticMoneyMasterService: PlasticMoneyMasterService,
    private concessionService: ConcessionService) { }

  form: any = {};
  isSubmit = false;
  isEdit = false;
  DoctorReferenceList: any = [];
  ConsultantList: any = [];
  spinner = false
  OrganizationList: any = [];
  SubDeptList: any = [];
  GruopList: any = [];
  ParticularsList: any = [];
  isPLASTICMONEY = false
  isCHEQUE = false
  isCASH = false
  PlasticInstrumentNameList: any = [];
  ConcessionList: any = [];
  table_data: any = [];

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.onTable(0)
    this.getDoctorReferenceList()
    this.getConsultantList()
    this.getOrganizationList()
    this.getSubDeptList()
    this.getGruopList()
    this.getConcessionList()
    console.log(new Date().toISOString().substring(0, 10))
    this.form.date = new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('T')[0]
    this.form.billType = "CASH"
    this.form.subDept = 28
    this.form.patientTypeOldNew="New"
    this.billTypeChange()
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


  fillConcessionData(): void {
    // filter and get percents
    const data = this.ConcessionList.find((e => e.id == Number(this.form.concessionType)))
    this.form.concessionPer = data.concession

    // calculate modulas
    const concessionTotal = Number(this.form.total) * Number(data.concession) / 100;
    this.form.concession = concessionTotal;

    //Total Caluculate
    this.form.nettotal = Number(this.form.total) - Number(concessionTotal)
    this.form.paidAmount = Number(this.form.total) - Number(concessionTotal)
  }

  getConcessionList(): void {
    this.concessionService.get().subscribe(
      data => {
        this.ConcessionList = data.body
      },
      err => {
        console.error(err)
      }
    );
  }

  calculateTotal(i): void {
    this.DetailsList[i].amount = Number(this.DetailsList[i].qty) * Number(this.DetailsList[i].rate)
    this.calculateFinalTotal()
  }

  calculateFinalTotal() {
    var amount = 0;
    this.DetailsList.forEach(value => {
      amount = amount + Number(value.amount);
    });
    this.form.total = amount;

    this.calculateConcession()
    this.calculateDue()
  }

  calculateConcession() {
    this.form.nettotal = this.form.total
    this.form.paidAmount = this.form.total
  }

  calculateDue() {
    this.form.due = Number(this.form.nettotal) - Number(this.form.paidAmount)
  }

  billTypeChange(): void {
    this.isCASH = false;
    if (this.form.billType == "CASH") {
      this.isCASH = true;
      this.form.methodOfPayment = "CASH"
      this.typeChange()
    }

  }

  typeChange(): void {
    this.isPLASTICMONEY = false
    this.isCHEQUE = false
    if (this.form.methodOfPayment == "PLASTICMONEY") {
      this.isPLASTICMONEY = true
      this.getPlasticInstrumentNameList()
    }
    if (this.form.methodOfPayment == "CHEQUE") {
      this.isCHEQUE = true
    }

  }

  getPlasticInstrumentNameList(): void {
    this.plasticMoneyMasterService.get().subscribe(
      data => {
        this.PlasticInstrumentNameList = data.body
      },
      err => {
        console.error(err)
      }
    );
  }

  fillParticularsData(i): void {
    const SortRow = this.ParticularsList[i].find((e => e.id == Number(this.DetailsList[i].particulars)))
    this.DetailsList[i].qty = 1
    this.DetailsList[i].rate = Number(SortRow.rate)
    this.DetailsList[i].amount = Number(SortRow.rate)
    this.calculateTotal(i)
  }

  getParticularsList(i): void {
    this.opdService.getParticularsListByGroupAndOrganization(this.DetailsList[i].groupName, this.form.organization).subscribe(
      data => {
        this.ParticularsList[i] = data.body
      },
      err => {
        console.error(err)
      }
    );
  }

  getGruopList(): void {
    this.groupService.getGruopListByDepartmentAndSuperGroup(17, 35).subscribe(
      data => {
        this.GruopList = data.body
      },
      err => {
        console.error(err)
      }
    );
  }

  getSubDeptList(): void {
    this.subdepartmentService.getSubDepartmentByDepartment("17").subscribe(
      data => {
        this.SubDeptList = data.body
        this.form.subDept = 28
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

  getConsultantList(): void {
    this.consultantMasterService.getConsultantList().subscribe(
      data => {
        this.ConsultantList = data.body
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

  getPatientDetails_IPD(): void {
    if (this.form.ipdno != null && this.form.ipdno.length >= 0 && this.form.ipdno != "") {
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
          } else {
            this.form = data.body
            this.form.date = new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('T')[0];
            this.form.billType = "CASH"
            this.form.subDept = 28
            this.form.patientTypeOldNew="New"
          }
          this.spinner = false;
        },
        err => {
          console.error(err)
        }
      );
    }
  }

  getPatientDetails_UHID(): void {
    if (this.form.uhid != null && this.form.uhid.length >= 0 && this.form.uhid != "") {
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
          } else {
            this.form = data.body
            this.form.refBy1 = data.body.referredBy
            this.form.refBy2 = 0
            this.form.consultant1 = data.body.consultant
            this.form.consultant2 = 0
            this.form.ptype = data.body.patientType
            this.form.date = new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('T')[0];
            this.form.billType = "CASH"
            this.form.subDept = 28
            this.form.patientTypeOldNew="New"
          }
          this.spinner = false;
        },
        err => {
          console.error(err)
        }
      );
    }
  }

  public DetailsList: any[] = [{
    sno: 1,
    id: 0,
    groupName: '',
    particulars: '',
    // procedureDoctor1: 0,
    // procedureDoctor2: 0,
    qty: 0,
    rate: 0,
    amount: 0
  }];

  addAddress() {
    this.DetailsList.push({
      sno: this.DetailsList.length + 1,
      id: 0,
      groupName: '',
      particulars: '',
      // procedureDoctor1: 0,
      // procedureDoctor2: 0,
      qty: 0,
      rate: 0,
      amount: 0
    });
  }

  removeAddress(i: number, id) {
    if (confirm("Are you sure you want to remove it?")) {
      if (id != 0) {
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
            this.service.deleteDetailById(id).subscribe(
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
      this.DetailsList.splice(i, 1);
    }
  }




  onEdit(row): void {
    this.form = {};
    window.scrollTo(0, 0);
    this.isEdit = true;
    this.service.getDetailsById(row.id).subscribe(
      data => {
        this.form = data.body
        this.form.subDept = Number(data.body.subDept)
        this.form.organization = Number(data.body.organization)
        this.form.consultant1 = Number(data.body.consultant1)
        this.form.refBy1 = Number(data.body.refBy1)
        this.form.refBy2 = Number(data.body.refBy2)
        let ok = 0;
         data.body.detailsList.forEach(value => {

          value.rate = Number(value.rate)
          value.qty = Number(value.qty)
          
          if(value.groupName !=null){
            value.groupName = this.GruopList.find((e => e.groupName == value.groupName)).id 
          }

          this.opdService.getParticularsListByGroupAndOrganization(value.groupName, row.organization).subscribe(
            data => {
              this.ParticularsList[ok] = data.body
              value.particulars = this.ParticularsList[ok].find((e => e.testName == value.particulars)).id 
              ok++;
            },
            err => {
              console.error(err)
            }
          );

          if(value.procedureDoctor1 !=null){
            value.procedureDoctor1 = this.ConsultantList.find((e => e.name == value.procedureDoctor1)).id
          }
          if(value.procedureDoctor2 !=null){
            value.procedureDoctor2 = this.ConsultantList.find((e => e.name == value.procedureDoctor2)).id
          }
        });

        this.DetailsList = data.body.detailsList
        
      },
      err => {
        console.error(err)
      }
    );
    this.typeChange()
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
      this.service.delete(id).subscribe(
        data => {
          if (result.isConfirmed) {
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
    })
  }

  onNew(): void {
    window.location.assign(window.location.href)

  }
  onSave(): void {
    // this.form.detailsList = []
    this.form.detailsList = this.DetailsList
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

}
