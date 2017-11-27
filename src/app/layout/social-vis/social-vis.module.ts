import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SocialVisRoutingModule} from './social-vis-routing.module';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';
import {SocialVisComponent} from './social-vis.component';

@NgModule({
    imports: [
        CommonModule,
        SocialVisRoutingModule,
        Ng2Charts,
        PageHeaderModule
    ],
    declarations: [SocialVisComponent]
})
export class SocialVisModule {
}
