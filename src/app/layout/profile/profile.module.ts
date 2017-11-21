import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProfileRoutingModule} from './profile-routing.module';
import { PageHeaderModule } from './../../shared';
import {ProfileComponent} from './profile.component';
import {RatingModule} from 'ngx-rating';

@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule,
        PageHeaderModule,
        RatingModule
    ],
    declarations: [ProfileComponent]
})
export class ProfileModule { }
