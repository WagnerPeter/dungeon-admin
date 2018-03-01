import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { createTestEmployee, createTestDayOverview } from './test-data';
import { DayOverview, Employee } from './model';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    private dayOverviewUrl = 'api/dayOverview';
    private employeeUrl = 'api/employee';

    constructor(private http: Http) { }

    getEmployee() {
        return this.http.get(this.employeeUrl)
            .toPromise()
            .then(response => {
                const emp = response.json().data as Employee;
                return emp;
            },
            error => {
                return Promise.reject("Something bad happened");
            }
        );

        // return new Promise(resolve => {
        //     setTimeout(() => {
        //         resolve(employee);
        //     }, 1000);

        // });
    }

    getDayOverview(): Observable<DayOverview> {
        return this.http.get(this.dayOverviewUrl)
            .map(response => response.json() as DayOverview)        
            .do((day) => {
                console.log(day);
            })
    }
}