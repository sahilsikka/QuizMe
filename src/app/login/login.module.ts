import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';
import {BackendService} from '../backend.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LoginRoutingModule
    ],
    declarations: [LoginComponent],
    providers: [BackendService],

})
export class LoginModule {
}
