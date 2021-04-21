import { Component, OnInit } from '@angular/core';
import { AdmissionService } from 'src/app/_service/reception/reception_reception/admission.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/_service/account/entry/payment.service';
import { PlasticMoneyMasterService } from 'src/app/_service/master/other_masters1/plastic-money-master.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private getService:AdmissionService,
    private activatedroute: ActivatedRoute,
    private service:PaymentService,
    private plasticMoneyMasterService:PlasticMoneyMasterService) { }

  form: any = {};
  isSubmit = false;
  isEdit = false;
  table_data: any = [];
  spinner = false
  isPLASTICMONEY = false
  isCHEQUE = false
  PlasticInstrumentNameList: any = [];
  PatientDetails:any =[];
  
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getPatientDetailList();
    this.onTable()
    this.getPlasticInstrumentNameList()
    
    this.activatedroute.queryParams.subscribe(data => {
      console.log(data['search'])
      this.form.ipdno = data['search']

      if(data['search'] != 0){
        this.filterPatientDetails()
      }

    });
  }

  getPatientDetailList():void{
    this.getService.getPatientDetailList().subscribe(
      data => {
        this.PatientDetails = data.body.filter(opt =>  opt.name=opt.name+"("+opt.uhid+")");
      },
      err => {
        console.error(err)
      }
    );
  }

  filterPatientByName(): void{
    const SortRow = this.PatientDetails.find((e => e.name == this.form.paidTo))
    this.form.ipdno = SortRow.ipd
    this.form.uhid=SortRow.uhid
  }

  filterPatientDetails(): void{
    if(this.form.ipdno != null && this.form.ipdno.length>=0 && this.form.ipdno != ""){
      const SortRow = this.PatientDetails.find((e => e.ipd == this.form.ipdno))
      this.form.ipdno = SortRow.ipd
      this.form.uhid=SortRow.uhid
      this.form.paidTo=SortRow.name
    }
    // let ipd = this.form.ipdno
    // if(this.form.ipdno != null && this.form.ipdno.length>=0 && this.form.ipdno != ""){
    //   this.spinner = true;
    //   this.getService.getPatientDetailsByIPD(this.form.ipdno).subscribe(
    //     data => {
    //       if (data.body == null) {
    //         Swal.fire({
    //           title: 'Error!',
    //           text: 'Not Found',
    //           icon: 'error',
    //           confirmButtonText: 'OK',
    //           width: 300
    //         })
    //         this.form = {}
    //       }else{
    //         this.form = data.body
    //         this.form.paidTo = data.body.name+'('+data.body.uhid+')'
    //         this.form.ipdno = ipd
    //       }
    //       this.spinner = false;
    //     },
    //     err => {
    //       console.error(err)
    //     }
    //   );
    // }
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

  onTable(): void {
    this.service.get().subscribe(
      data => {
        this.table_data = data.body
      },
      err => {
        console.error(err)
      }
    );
  }

  

  onNew(): void {
    window.location.assign(window.location.href)
    
  }

  typeChange():void{
    console.log(this.form.type)

    this.isPLASTICMONEY = false
    this.isCHEQUE = false

    if(this.form.type=="PLASTICMONEY"){
      this.isPLASTICMONEY = true
    }
    if(this.form.type=="CHEQUE"){
      this.isCHEQUE = true
    }

  }
  
  onSave(): void {
    console.log(this.isEdit)
    if (this.isEdit) {
      this.onUpdate();
    } else {
      this.onSubmit();
    }
  }

  onEdit(row): void {
    this.form = {};
    window.scrollTo(0, 0);
    this.form = row
    this.isEdit = true;
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

  n:any=[]
   inWords () : void {
     var num=this.form.amount
    var a = ['','One ','Two ','Three ','Four ', 'Five ','Six ','Seven ','Eight ','Nine ','Ten ','Eleven ','Twelve ','Thirteen ','Fourteen ','Fifteen ','Sixteen ','Seventeen ','Eighteen ','Nineteen '];
    var b = ['', '', 'Twenty','Thirty','Forty','Fifty', 'Sixty','Seventy','Eighty','Ninety'];
    
      if ((num = num.toString()).length > 9) this.form.words = 'overflow';
      this.n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
      if (!this.n) return; var str = '';
      str += (this.n[1] != 0) ? (a[Number(this.n[1])] || b[this.n[1][0]] + ' ' + a[this.n[1][1]]) + 'Crore ' : '';
      str += (this.n[2] != 0) ? (a[Number(this.n[2])] || b[this.n[2][0]] + ' ' + a[this.n[2][1]]) + 'Lakh ' : '';
      str += (this.n[3] != 0) ? (a[Number(this.n[3])] || b[this.n[3][0]] + ' ' + a[this.n[3][1]]) + 'Thousand ' : '';
      str += (this.n[4] != 0) ? (a[Number(this.n[4])] || b[this.n[4][0]] + ' ' + a[this.n[4][1]]) + 'Hundred ' : '';
      str += (this.n[5] != 0) ? ((str != '') ? '' : '') + (a[Number(this.n[5])] || b[this.n[5][0]] + ' ' + a[this.n[5][1]]) + '' : '';
      // return str;
      str +='Rupees Only';
      this.form.words = str 
  }

}
