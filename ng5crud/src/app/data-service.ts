import { Injectable } from '@angular/core';

import { createTestEmployee } from './test-data';

@Injectable()
export class DataService {

    constructor() { }

    getEmployee() {
        return createTestEmployee();
    }
}