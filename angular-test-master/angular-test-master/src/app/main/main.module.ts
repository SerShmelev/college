import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {CollegeComponent} from './college/college.component';
import {CollegeService} from '../_services/college.service';
import {MatListModule} from '@angular/material/list';
import {TranslateModule} from '@ngx-translate/core';
import {MainComponent} from './main.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
    declarations: [CollegeComponent, MainComponent],
    providers: [CollegeService],
    imports: [
        CommonModule,
        MainRoutingModule,
        MatListModule,
        TranslateModule.forChild(),
        MatProgressSpinnerModule
    ]
})
export class MainModule {
}
