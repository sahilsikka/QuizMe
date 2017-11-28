import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileRoutingModule} from './profile-routing.module';
import {PageHeaderModule} from './../../shared';
import {ProfileComponent} from './profile.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule,
        PageHeaderModule,
        FormsModule
    ],
    declarations: [ProfileComponent]
})
export class ProfileModule {
}
