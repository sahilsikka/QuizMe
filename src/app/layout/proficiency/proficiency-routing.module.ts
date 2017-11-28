import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProficiencyComponent} from './proficiency.component';

const routes: Routes = [
    {path: '', component: ProficiencyComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProficiencyRoutingModule {
}
