import { NgModule } from '@angular/core';


// Components
import { ReportComponent } from '../report/report/report.component';
import { EditReportComponent } from '../report/edit-report/edit-report.component';
import { ReportRourt } from './report-routing.component';

import { SharedModule } from '../shared/shared.module';
import { QRCodeModule } from 'angularx-qrcode';
import { SignaturePadModule } from 'angular2-signaturepad';

@NgModule({
  declarations: [
    ReportComponent,
    EditReportComponent
  ],
  imports: [
      ReportRourt,
      QRCodeModule,
      SignaturePadModule,
      SharedModule
  ]
})
export class ReportModule {}
