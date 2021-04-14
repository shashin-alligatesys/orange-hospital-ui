
import { ActivatedRoute } from '@angular/router';
import { TaxdemandBillService } from '../../_services/entry_service/taxdemand-bill.service';
import { TaxcollectionReciptService } from '../../_services/entry_service/taxcollection-recipt.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { TokenStorageService } from '../../_services/token-storage.service';
import { PropertyService } from '../../_services/master_service/property.service';


@Component({
  selector: 'app-requests-list-admin',
  templateUrl: './requests-list-admin.component.html',
  styleUrls: ['./requests-list-admin.component.css']
})
export class RequestsListAdminComponent implements OnInit {
  product: string;
  village: string;

  editMasterCollection: taxCollectionRecipt = new taxCollectionRecipt();

  constructor(private modalService: NgbModal,
    private activatedroute: ActivatedRoute,
    private taxdemandBillService: TaxdemandBillService,
    private propertyService: PropertyService,
    private tokenStorageService: TokenStorageService,
    private taxcollectionReciptService: TaxcollectionReciptService) {
  }

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  dtTrigger1: Subject<any> = new Subject();

  propertydata: any = [];
  propertyMaster: property = new property();

  collectiondata: any=[];
  taxCollectionMaster: taxCollectionRecipt = new taxCollectionRecipt();


  taxDemandtable: any = [];
  taxCollectiontable: any = [];
  isSubmit = false;
  ngOnInit() {
    this.activatedroute.queryParams.subscribe(data => {
      this.product = data['query'];
    });

    this.activatedroute.paramMap.subscribe(params => {
      this.village = params.get('village')
    });

    this.onLoad();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 25],
      processing: true,
      dom: 'Bfrtip',
      buttons: [{ extend: 'copy' }, { extend: 'print', title: '', }, { extend: 'csv', title: '', filename: 'Report_CSV' }, { extend: 'excel', title: '', filename: 'Report_EXCEL' }, { extend: 'pdf', title: '', filename: 'Report_PDF' }, { extend: 'colvis' }]
    };
  }
  onLoad(): void {
    this.loadCollectionDateTable();
    this.loadPropertyDateTable();
  }

 

  /*
  Property-------------------------------------------------------------------------------------------
  */

  loadPropertyDateTable(): void {
    this.propertyService.getByUserVillageQueue(this.village,this.product).subscribe(
      data => {
        this.propertydata = data.body;
        this.dtTrigger.next();
      },
      err => {
        console.error(err)
      }
    );
  }
  propertyModalPopUp(targetModal, rowData) {
    this.propertyMaster = new property();
    this.propertyMaster = rowData;
    this.ownerdatalist_1=[];
    this.tenantdatalist_1=[];
    if (rowData.propertyUser != null) {
      for(var user of  rowData.propertyUser){
        if(user.type =='1'){
          this.ownerdatalist_1.push(user);
        }
        if(user.type =='2'){
          this.tenantdatalist_1.push(user);
        }
      }
    }
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'xl'
    });
  }
  public ownerdatalist_1: any[] = [{
    no: 1,
    type: '1',
    name: '',
    date: '',
    active: false
  }];
  public tenantdatalist_1: any[] = [{
    no: 1,
    type: '2',
    name: '',
    date: '',
    active: false
  }];

  propertyApprove(id):void{
    this.propertyService.approveByID(id).subscribe(
      data => {
        this.isSubmit = true;
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
          Swal.fire({
            title: 'Error!',
            text: data.message,
            icon: 'error',
            confirmButtonText: 'OK',
            width: 300
          })
        }
      },
      err => {
        console.error(err);
      }
    )
  }

  propertyReject(id):void{
    this.propertyService.rejectByID(id).subscribe(
      data => {
        this.isSubmit = true;
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
          Swal.fire({
            title: 'Error!',
            text: data.message,
            icon: 'error',
            confirmButtonText: 'OK',
            width: 300
          })
        }
      },
      err => {
        console.error(err);
      }
    )
  }




 /*
  Collection-------------------------------------------------------------------------------------------
  */

  loadCollectionDateTable(): void {
    this.dtTrigger1 = new Subject();
      this.taxcollectionReciptService.findAllByVillageNameQueue(this.village,this.product).subscribe(
        data => {
          this.collectiondata = data.body;
          this.dtTrigger1.next();
        },
        err => {
          console.error(err)
        }
      );
  }
  collectionModalPopUp(targetModal, rowData) {

    this.taxcollectionReciptService.findByWardNumberAndPropertyNumberAndPropertyNumber1AndVillageCdAndYearCdAndReceiptNumber_new(rowData.wardNumber,rowData.propertyNumber,rowData.propertyNumber1,rowData.villageCd,rowData.yearCd,rowData.receiptNumber).subscribe(
      data => {
        this.addresses1=[];
          this.taxCollectionMaster = rowData;
          if (data.body.taxCollection_QueueTax != null) {
            this.addresses1 = data.body.taxCollection_QueueTax;
          }
          this.taxCollectionMaster.yearOfConstruction=data.body.property_Entity.yearOfConstruction;
          this.taxCollectionMaster.typeOfProperty=data.body.property_Entity.typeOfProperty;
          this.taxCollectionMaster.areaCode=data.body.property_Entity.areaCode;
          this.taxCollectionMaster.area=data.body.property_Entity.area;
          this.taxCollectionMaster.blockNumber=data.body.property_Entity.blockNumber;
          this.taxCollectionMaster.houseNumber=data.body.property_Entity.houseNumber;
          var OwnerNames = "";
          var ConsumerNames = "";
          for (var value of data.body.property_Entity.propertyUser) {

            if(value.type == "1"){
              OwnerNames = OwnerNames + value.name + '\r\n'
            }
            if(value.type == "2"){
              ConsumerNames = ConsumerNames + value.name + '\r\n'
            }
          }
          this.taxCollectionMaster.owner = OwnerNames;
          this.taxCollectionMaster.consumer = ConsumerNames;
          this.modalService.open(targetModal, {
            centered: true,
            backdrop: 'static',
            size: 'xl'
          });
      },
      err => {
        console.error(err)
      }
    );
  }

  public addresses1: any[] = [{
    itemNumber: 1,
    propertyNumber: '',
    propertyNumber1: '',
    category: 0,
    propertyTax: 0,
    cleaningTax: 0,
    sewerTax: 0,
    waterTax: 0,
    educationTax: 0,
    lightTax: 0,
    noticeFee: 0,
    edukNoticeFee: 0,
    total: 0
  }];

  collectionApprove(id):void{
    this.taxcollectionReciptService.approveByID(id).subscribe(
      data => {
        this.isSubmit = true;
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
          Swal.fire({
            title: 'Error!',
            text: data.message,
            icon: 'error',
            confirmButtonText: 'OK',
            width: 300
          })
        }
      },
      err => {
        console.error(err);
      }
    )
  }
  collectionReject(id):void{
    this.taxcollectionReciptService.rejectByID(id).subscribe(
      data => {
        this.isSubmit = true;
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
          Swal.fire({
            title: 'Error!',
            text: data.message,
            icon: 'error',
            confirmButtonText: 'OK',
            width: 300
          })
        }
      },
      err => {
        console.error(err);
      }
    )
  }

}



export class property {
  status: string;
  itemNo: number;
  wardNumber: string;
  propertyNumber: string;
  propertyNumber1: string;
  assessmentDate: string;
  oldWardNumber: string;
  oldPropertyNumber: string;
  oldPropertyNumber1: string;
  houseNumber: string;
  blockNumber: string;
  phoneNumber: string;
  areaLength: number;
  areaWidth: number;
  areaSquareMeters: number;
  extraLength: number;
  extraWidth: number;
  extraSquareMeters: number;
  area: string;
  typeOfProperty: number;
  waterZone: boolean;
  numberOfConnections: string;
  waterConsumptionPurpose: string;
  taluka: string;
  tp: string;
  sewer: string;
  sensation: string;
  waterConnectionReceiptNumber: string;
  waterConnectionReceiptDate: string;
  city: string;
  citySurvey: string;
  criticismNumber: string;
  revenueSurvey: string;
  descriptionOfProperty: string;
  revenueBlock: string;
  formNumber: string;
  resolutionNumber: string;
  spaceAround: string;
  openLand_Plot: string;
  yearOfConstruction: string;
  governmentProperty: boolean;
  billMaking: boolean;
  propertyCancellation: boolean;
  rent: string;
  note: string;
  closedOrganization: boolean;
  propertyTax: string;
  taxInformation: string;
  keepingDetailsForAdvanceEntry: boolean;
  propertyUser: PropertyUser[];
  areaCode:string;
  areaType:string;
}
export class PropertyUser {
  no: number;
  type: string;
  name: string;
  date: string;
  active: boolean;
}






export class taxCollectionRecipt {
  id: String;
  receiptNumber: number;
  date: String;
  payment: String;
  checkNumber: String;
  wardNumber: String;
  houseNumber: String;
  bankName: String;
  propertyNumber: String;
  propertyNumber1: String;
  toPropertyNumber: String;
  toPropertyNumber1: String;
  blockNumber: String;
  owner: String;
  area: String;
  areaCode: String;
  consumer: String;
  typeOfProperty: String;
  yearOfConstruction: String;
  governmentProperty: boolean;
  taxCollectionTax: taxCollectionTax_List_1[];
  taxPayerName: String;
  totalAmount: number;
  compensatin: number;
  lastTotal: number;
  printType: String;
  saveOnPrint: boolean;
}
export class taxCollectionTax_List_1 {
  villageCd: number;
  yearCd: number;
  userCd: number;
  receiptNumber: number;
  wardNumber: number;
  itemNumber: number;
  propertyNumber: String;
  propertyNumber1: String;
  category: number;
  propertyTax: number;
  cleaningTax: number;
  sewerTax: number;
  waterTax: number;
  educationTax: number;
  lightTax: number;
  noticeFee: number;
  educationNotice: number;
  edukNoticeFee: number;
  total: number;
}