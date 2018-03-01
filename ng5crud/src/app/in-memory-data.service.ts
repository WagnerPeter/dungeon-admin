import { InMemoryDbService } from 'angular-in-memory-web-api';
import { createTestDayOverview } from './test-data';

export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        return {
            dayOverview: createTestDayOverview()
        };
    }

}