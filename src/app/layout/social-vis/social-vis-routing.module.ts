import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SocialVisComponent} from "./social-vis.component";

const routes: Routes = [
    { path: '', component: SocialVisComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SocialVisRoutingModule { }
