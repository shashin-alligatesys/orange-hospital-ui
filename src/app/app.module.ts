import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DataTablesModule} from 'angular-datatables';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { NgSelectModule} from '@ng-select/ng-select';

import { RegistrationComponent } from './_pages/reception/reception_reception/registration/registration.component';
import { AppointmentComponent } from './_pages/reception/reception_reception/appointment/appointment.component';
import { AdmissionComponent } from './_pages/reception/reception_reception/admission/admission.component';
import { ScannedImageComponent } from './_pages/reception/reception_reception/scanned-image/scanned-image.component';

import { OpdComponent } from './_pages/reception/reception_bill/opd/opd.component';
import { RadioComponent } from './_pages/reception/reception_bill/radio/radio.component';
import { LabComponent } from './_pages/reception/reception_bill/lab/lab.component';
import { OpdhealthCheckupComponent } from './_pages/reception/reception_bill/opdhealth-checkup/opdhealth-checkup.component';
import { CashDuesComponent } from './_pages/reception/reception_bill/cash-dues/cash-dues.component';

import { OpdRefundComponent } from './_pages/reception/reception_bill_refund/opd-refund/opd-refund.component';
import { RadioRefundComponent } from './_pages/reception/reception_bill_refund/radio-refund/radio-refund.component';
import { LabRefundComponent } from './_pages/reception/reception_bill_refund/lab-refund/lab-refund.component';
import { OpdhealthCheckupRefundComponent } from './_pages/reception/reception_bill_refund/opdhealth-checkup-refund/opdhealth-checkup-refund.component';

import { BillDetailSheetComponent } from './_pages/ipd/bill/bill-detail-sheet/bill-detail-sheet.component';
import { ProvisionalBillComponent } from './_pages/ipd/bill/provisional-bill/provisional-bill.component';
import { FinalIpdBillComponent } from './_pages/ipd/bill/final-ipd-bill/final-ipd-bill.component';
import { IpdAdvancedComponent } from './_pages/ipd/bill/ipd-advanced/ipd-advanced.component';
import { PaymentRefundComponent } from './_pages/ipd/bill/payment-refund/payment-refund.component';

import { BedShiftingComponent } from './_pages/ipd/bed/bed-shifting/bed-shifting.component';
import { BedStatusComponent } from './_pages/ipd/bed/bed-status/bed-status.component';
import { VacantBedComponent } from './_pages/ipd/bed/vacant-bed/vacant-bed.component';

import { BedDischargeComponent } from './_pages/ipd/dischange/bed-discharge/bed-discharge.component';
import { DischargeClearanceComponent } from './_pages/ipd/dischange/discharge-clearance/discharge-clearance.component';

import { ReceiptComponent } from './_pages/account/entry/receipt/receipt.component';
import { PaymentComponent } from './_pages/account/entry/payment/payment.component';

import { IpdRegisterComponent } from './_pages/report/register_report/ipd-register/ipd-register.component';
import { IpdReceiptRegisterComponent } from './_pages/report/register_report/ipd-receipt-register/ipd-receipt-register.component';
import { OpdRegisterComponent } from './_pages/report/register_report/opd-register/opd-register.component';
import { LabRegisterComponent } from './_pages/report/register_report/lab-register/lab-register.component';
import { RadioRegisterComponent } from './_pages/report/register_report/radio-register/radio-register.component';
import { HealthCheckupRegisterComponent } from './_pages/report/register_report/health-checkup-register/health-checkup-register.component';
import { CashDueReportComponent } from './_pages/report/register_report/cash-due-report/cash-due-report.component';
import { OrganizationReportComponent } from './_pages/report/register_report/organization-report/organization-report.component';

import { MisComponent } from './_pages/report/analysis_report/mis/mis.component';
import { GroupwiseTestwiseAnalysisComponent } from './_pages/report/analysis_report/groupwise-testwise-analysis/groupwise-testwise-analysis.component';

import { AdmissionDischargeComponent } from './_pages/report/routine_report/admission-discharge/admission-discharge.component';
import { FeeCollectionReportComponent } from './_pages/report/routine_report/fee-collection-report/fee-collection-report.component';

//Master
import { IpdTestComponent } from './_pages/master/test_master/ipd-test/ipd-test.component';
import { OpdTestComponent } from './_pages/master/test_master/opd-test/opd-test.component';

import { ConsultantDoctorComponent } from './_pages/master/doctor/consultant-doctor/consultant-doctor.component';
import { ReferringDoctorComponent } from './_pages/master/doctor/referring-doctor/referring-doctor.component';

import { OpdBillMasterComponent } from './_pages/master/bill_master/opd-bill-master/opd-bill-master.component';
import { LabBillMasterComponent } from './_pages/master/bill_master/lab-bill-master/lab-bill-master.component';
import { RadioBillMasterComponent } from './_pages/master/bill_master/radio-bill-master/radio-bill-master.component';

import { AppointmentSchedulerComponent } from './_pages/master/appointment_master/appointment-scheduler/appointment-scheduler.component';

import { IpdPackageMasterComponent } from './_pages/master/package_master/ipd-package-master/ipd-package-master.component';
import { OpdPackageMasterComponent } from './_pages/master/package_master/opd-package-master/opd-package-master.component';

import { DepartmentComponent } from './_pages/master/other_masters1/department/department.component';
import { SubdepartmentComponent } from './_pages/master/other_masters1/subdepartment/subdepartment.component';
import { ConcessionComponent } from './_pages/master/other_masters1/concession/concession.component';
import { SuperGroupComponent } from './_pages/master/other_masters1/super-group/super-group.component';
import { GroupComponent } from './_pages/master/other_masters1/group/group.component';
import { SubGroupComponent } from './_pages/master/other_masters1/sub-group/sub-group.component';
import { SubGroup1Component } from './_pages/master/other_masters1/sub-group1/sub-group1.component';
import { SubGroup2Component } from './_pages/master/other_masters1/sub-group2/sub-group2.component';
import { DoctorIncentiveMasterComponent } from './_pages/master/other_masters1/doctor-incentive-master/doctor-incentive-master.component';
import { RefDoctorIncentiveMasterComponent } from './_pages/master/other_masters1/ref-doctor-incentive-master/ref-doctor-incentive-master.component';
import { InsuranceMasterComponent } from './_pages/master/other_masters1/insurance-master/insurance-master.component';
import { CashlessAuthorizedComponent } from './_pages/master/other_masters1/cashless-authorized/cashless-authorized.component';
import { DischargeSummaryComponent } from './_pages/master/other_masters1/discharge-summary/discharge-summary.component';
import { DischargeSummaryTemplateMasterComponent } from './_pages/master/other_masters1/discharge-summary-template-master/discharge-summary-template-master.component';
import { DoctorHoursAbsenteeEntryComponent } from './_pages/master/other_masters1/doctor-hours-absentee-entry/doctor-hours-absentee-entry.component';
import { DeathSummaryComponent } from './_pages/master/other_masters1/death-summary/death-summary.component';
import { TdsMasterComponent } from './_pages/master/other_masters1/tds-master/tds-master.component';
import { CasepaperMedicineMasterComponent } from './_pages/master/other_masters1/casepaper-medicine-master/casepaper-medicine-master.component';

import { OrganizationComponent } from './_pages/master/other_masters2/organization/organization.component';
import { TpaMasterComponent } from './_pages/master/other_masters2/tpa-master/tpa-master.component';
import { ClassMasterComponent } from './_pages/master/other_masters2/class-master/class-master.component';
import { WardMasterComponent } from './_pages/master/other_masters2/ward-master/ward-master.component';
import { PartyMasterComponent } from './_pages/master/other_masters2/party-master/party-master.component';
import { PlasticMoneyMasterComponent } from './_pages/master/other_masters2/plastic-money-master/plastic-money-master.component';
import { PatientTypeMatserComponent } from './_pages/master/other_masters2/patient-type-matser/patient-type-matser.component';
import { DoctorPayableEntryComponent } from './_pages/master/other_masters2/doctor-payable-entry/doctor-payable-entry.component';
import { ExternalLabMasterComponent } from './_pages/master/other_masters2/external-lab-master/external-lab-master.component';
import { ExternalRadioMasterComponent } from './_pages/master/other_masters2/external-radio-master/external-radio-master.component';
import { ExternalLabTestMasterComponent } from './_pages/master/other_masters2/external-lab-test-master/external-lab-test-master.component';
import { ExternalRadioTestMasterComponent } from './_pages/master/other_masters2/external-radio-test-master/external-radio-test-master.component';

import {AutocompleteLibModule} from 'angular-ng-autocomplete';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
   
    RegistrationComponent,
   
    AppointmentComponent,
   
    AdmissionComponent,
   
    ScannedImageComponent,
   
    OpdComponent,
   
    RadioComponent,
   
    LabComponent,
   
    OpdhealthCheckupComponent,
   
    CashDuesComponent,
   
    OpdRefundComponent,
   
    RadioRefundComponent,
   
    LabRefundComponent,
   
    OpdhealthCheckupRefundComponent,
   
    BillDetailSheetComponent,
   
    ProvisionalBillComponent,
   
    FinalIpdBillComponent,
   
    IpdAdvancedComponent,
   
    PaymentRefundComponent,
   
    BedShiftingComponent,
   
    BedStatusComponent,
   
    VacantBedComponent,
   
    BedDischargeComponent,
   
    DischargeClearanceComponent,
   
    ReceiptComponent,
   
    PaymentComponent,
   
    IpdRegisterComponent,
   
    IpdReceiptRegisterComponent,
   
    OpdRegisterComponent,
   
    LabRegisterComponent,
   
    RadioRegisterComponent,
   
    HealthCheckupRegisterComponent,
   
    CashDueReportComponent,
   
    OrganizationReportComponent,
   
    MisComponent,
   
    GroupwiseTestwiseAnalysisComponent,
   
    AdmissionDischargeComponent,
   
    FeeCollectionReportComponent,
   
    IpdTestComponent,
   
    OpdTestComponent,
   
    ConsultantDoctorComponent,
   
    ReferringDoctorComponent,
   
    OpdBillMasterComponent,
   
    LabBillMasterComponent,
   
    RadioBillMasterComponent,
   
    AppointmentSchedulerComponent,
   
    IpdPackageMasterComponent,
   
    OpdPackageMasterComponent,
   
    DepartmentComponent,
   
    SubdepartmentComponent,
   
    ConcessionComponent,
   
    SuperGroupComponent,
   
    GroupComponent,
   
    SubGroupComponent,
   
    SubGroup1Component,
   
    SubGroup2Component,
   
    DoctorIncentiveMasterComponent,

    RefDoctorIncentiveMasterComponent,
   
    InsuranceMasterComponent,
   
    CashlessAuthorizedComponent,
   
    DischargeSummaryComponent,
   
    DischargeSummaryTemplateMasterComponent,
   
    DoctorHoursAbsenteeEntryComponent,
   
    DeathSummaryComponent,
   
    TdsMasterComponent,
   
    CasepaperMedicineMasterComponent,
   
    OrganizationComponent,
   
    TpaMasterComponent,
   
    ClassMasterComponent,
   
    WardMasterComponent,
   
    PartyMasterComponent,
   
    PlasticMoneyMasterComponent,
   
    PatientTypeMatserComponent,
   
    DoctorPayableEntryComponent,
   
    ExternalLabMasterComponent,
   
    ExternalRadioMasterComponent,
   
    ExternalLabTestMasterComponent,
   
    ExternalRadioTestMasterComponent,
   
    
   


   

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DataTablesModule,
    NgbModule,
    ReactiveFormsModule,
    PdfJsViewerModule,
    AutocompleteLibModule,
    ToastrModule.forRoot(),
    NgSelectModule
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
