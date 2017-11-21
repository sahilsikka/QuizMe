import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProficiencyRoutingModule} from './proficiency-routing.module';
import {FormsModule} from '@angular/forms';
import {StarRatingModule} from 'angular-star-rating';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';
import {ProficiencyComponent} from './proficiency.component';

@NgModule({
    imports: [
        CommonModule,
        ProficiencyRoutingModule,
        FormsModule,
        StarRatingModule.forRoot(),
        StarRatingModule,
        PageHeaderModule
    ],
    declarations: [ProficiencyComponent]
})
export class ProficiencyModule {
}
