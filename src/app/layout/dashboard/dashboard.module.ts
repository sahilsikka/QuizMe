import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import {Ng2TableModule} from 'ng2-table';
import {Ng2BootstrapModule, PaginationModule} from 'ng-bootstrap';
import {NgxChartsModule} from "ngx-charts";
@NgModule({
    imports: [
        CommonModule,
        Ng2TableModule,
        NgxChartsModule,
        PaginationModule.forRoot(),
        Ng2BootstrapModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule,
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent
    ],
    providers: [

    ]
})
export class DashboardModule { }
