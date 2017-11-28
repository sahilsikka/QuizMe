import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SocialVisComponent} from "./social-vis.component";

const routes: Routes = [
    {path: '', component: SocialVisComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SocialVisRoutingModule {
}
