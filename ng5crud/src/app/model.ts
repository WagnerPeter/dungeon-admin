
export class Employee {
    id: number;
    name: string;

    plannedShiftStart: Date;

    shiftStart: Date;
    shiftEnd: Date;

    amountConsumed: number;
    role: Role;
    phoneNumber: string;
}

export class Event {
    id: number;
    name: string;
    tasks: string[];
    date: Date; 
    
    organizers: Employee[];
    
    description: string;

    organizationRating: number;
    vistisRating: number;
    athmosphereRating: number;

    eventEvaluation: string;
}

export class DayOverview {
    date: Date;
    amountHandedOver: number;
    amountReceipt: number;
    evaluation: string;
    
    employees: Employee[];
    events: Event[];

    missingStocks: string;
    runngingLowStuff: string;
    brokenStuff: string;
}

export class Role {
    name: string;
}