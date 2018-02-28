import { Component, OnInit } from '@angular/core';
import { DataService } from "./data-service";
import { DayOverview, Employee } from './model';

@Component({
    moduleId: module.id,
    selector: 'day-overview',
    templateUrl: 'day-overview.component.html',
    styleUrls: ['day-overview.component.css']
})

export class DayOverviewComponent implements OnInit {
   
    employee: Employee;

    constructor(private dataService: DataService) { }

    //lifecycle goes here
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.employee = this.dataService.getEmployee();
    }
}