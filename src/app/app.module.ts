import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { VisModule } from 'ng2-vis';
import { TimelineComponent } from './timeline/timeline.component';
import { NgTimeLineComponent } from './ng-time-line/ng-time-line.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { TabsModule, PaginationModule } from 'ng2-bootstrap';
import { OrderService } from './order.service';
import { OrderModel } from './models/order.model';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    NgTimeLineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2GoogleChartsModule,
    VisModule,
    Ng2TableModule,
    PaginationModule,
    TabsModule,
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
