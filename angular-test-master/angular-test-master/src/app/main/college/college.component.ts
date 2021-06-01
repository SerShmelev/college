import {Component, OnInit} from '@angular/core';
import {College, CollegeService} from '../../_services/college.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-college',
    templateUrl: './college.component.html',
    styleUrls: ['./college.component.scss']
})
export class CollegeComponent implements OnInit {
    college: College;
    isLoading = true;

    constructor(
        private translate: TranslateService,
        private collegeService: CollegeService) {}

    ngOnInit() {
        this.getCollege();
    }
    getCollege(): void {
        this.collegeService.getCollege().subscribe(college => {
            this.college = college;
            setTimeout(() => {
                this.isLoading = false;
            }, 1000);
        });
    }
}
