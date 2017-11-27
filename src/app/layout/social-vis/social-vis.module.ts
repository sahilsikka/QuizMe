import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SocialVisRoutingModule} from './social-vis-routing.module';
import {FormsModule} from '@angular/forms';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';
import {SocialVisComponent} from './social-vis.component';

@NgModule({
    imports: [
        CommonModule,
        SocialVisRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [SocialVisComponent]
})
export class SocialVisModule {
}
