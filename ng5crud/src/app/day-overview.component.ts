import { Component, OnInit } from '@angular/core';
import { DataService } from "./data.service";
import { DayOverview, Employee } from './model';

@Component({
    moduleId: module.id,
    selector: 'day-overview',
    templateUrl: 'day-overview.component.html',
    styleUrls: ['day-overview.component.css']
})

export class DayOverviewComponent implements OnInit {
   
    dayOverview: DayOverview;
    isBusy = false;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.getDayOverview();
    }

    getDayOverview() {
        this.isBusy = true;
        this.dataService.getDayOverview().subscribe(result => {
            this.dayOverview = result;
            this.isBusy = false;
        }, (errorMsg: string) => {
            this.isBusy = false;
            console.log(errorMsg);
        });
    }
}