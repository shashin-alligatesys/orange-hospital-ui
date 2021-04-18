import { ClassMasterService } from './../../../../_service/master/other_masters1/class-master.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
const BILLAPI = environment.apiUrl+"/billDetail/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Component({
  selector: 'app-bill-detail-sheet',
  templateUrl: './bill-detail-sheet.component.html',
  styleUrls: ['./bill-detail-sheet.component.css']
})
export class BillDetailSheetComponent implements OnInit {

  constructor(private http: HttpClient,
    private classService: ClassMasterService) { }

  form: any = {};
  keyword = 'name';
  public data =[];
  isSubmit = false;
  ClassList: any = [];

  ngOnInit(): void {
    this.form.date = new Date().toISOString().substring(0,10);
    this.form.time = new Date().toTimeString().substring(0,5);
    this.getClass().subscribe(
      data => {
      console.log(data.body); 
      this.ClassList = data.body;
    },
    err => {
      console.log(err)
    });
 

      let me = this;
      this.getData(event).subscribe(
        data => {
          console.log(data.body);
          //this.data = data.body;
          me.data=data.body;
          this.form.patientName=data.body.name;
          this.form.ipdNo=data.body.ipdno;
          this.form.uhid=data.body.uhid;
        },
        err => {
          console.log(err)
        }
      );

  }
  
  onSubmit(): void {
  }
  

  onKeyUHID(event: any): void {
    console.log(event.target.value);
  }
  getData(event: any): Observable<any> {
    return this.http.get(BILLAPI + 'findAll', httpOptions);
  }

  getClass() : Observable<any> {
    return this.classService.get();
  }

  public DetailsList: any[] = [{
    date: '',
    time:'',
    id: 0,
    testName: '',
    procedureDoctor: '',
    qty: 0,
    rate: 0,
    amount: 0
  }];

  addRow() {
    this.DetailsList.push({
      date:'',
      time:'',
      id: 0,
      testName: '',
      procedureDoctor: '',
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
            // this.service.deleteDetailById(id).subscribe(
            //   data => {
            //     if (data.status == 200) {
            //       Swal.fire({
            //         title: 'Deleted!',
            //         text: 'Data Deleted Success',
            //         icon: 'success',
            //         confirmButtonText: 'OK',
            //         width: 300,
            //         timer: 1500
            //       }).then((result) => {
            //         if (result.isConfirmed) {
            //           window.location.reload();
            //         }
            //       });
            //     }
            //   },
            //   err => {
            //     console.log(err)
            //   }
            // );
          }
        })
      }
      this.DetailsList.splice(i, 1);
    }
  }
  calculateTotal(i): void {
    console.log(i)
  }

  selectEvent(item) {
    console.log("select event",item.id)
    this.form.uhid=item.uhid;
    this.form.ipdNo=item.ipdno;
  }

  onChangeSearch(val: string) {
    console.log("onchange event",val)
  }
  
  onFocused(e){
    console.log("onfocus event",e.target.value)
  }
}
