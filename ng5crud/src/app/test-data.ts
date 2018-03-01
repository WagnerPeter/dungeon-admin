export function createTestEmployee() {
    return {
        id: 1,
        name: 'Adam Porteleky',
        shiftStart: null,
        shiftEnd: null,

        amountConsumed: 0,
        role: { name: 'shiftManager'},
        phoneNumber: '0905 504 335'
    }
}


export function createTestDayOverview() {
    return {
        date: new Date(),
        amountHandedOver: 0,
        amountReceipt: 0,
        evaluation: '',
    
        employees: [
            {
                id: 5,
                name: 'Adam Porteleky',
                plannedShiftStart: new Date('March 3, 2018 13:00:00'),
                shiftStart: null,
                shiftEnd: null,
        
                amountConsumed: 0,
                role: {name: 'shiftManager'},
                phoneNumber: ''
            },
            {
                id: 7,
                name: 'Veronika Polakovicova',
                plannedShiftStart: new Date('March 3, 2018 18:00:00'),

                shiftStart: null,
                shiftEnd: null,
        
                amountConsumed: 0,
                role: { name: 'bartender'},
                phoneNumber: ''
            }
        ],
        events: [
            {
                id: 1,
                name: 'Just Dance Party',
                tasks: [
                    'Dať nabíjať ovládače MOVE playstation',
                    'vytvoriť tanečný parket (poposúvať stoly, posledný zrušiť)',
                    'Rezervačka na F3 pre organizátorov',
                    'prichystať ceny do súťaže = konzum poukážky'
                ],
                date: new Date(),
                
                organizers: [
                    {
                        id: 10,
                        name: 'Julli Tibenska',
                        shiftStart: null,
                        shiftEnd: null,
                        plannedShiftStart: null,
                        phoneNumber: '+421 944 555 565',
                        amountConsumed: 0,
                        role: {name: 'eventManager'}
                    },
                    {
                        id: 10,
                        name: 'Jakub Rehak',
                        plannedShiftStart: null,
                        shiftStart: null,
                        shiftEnd: null,
                        phoneNumber: '+421 944 111 353',
                        amountConsumed: 0,
                        role: {name: 'eventManager'}
                    }
                ],
                
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio nulla, faucibus porta tempor et, aliquam vel elit. Etiam sodales ante vel risus aliquet, sagittis vulputate diam vehicula. Aenean et tortor elit. Etiam fringilla cursus enim non elementum.',
            
                organizationRating: 0,
                vistisRating: 0,
                athmosphereRating: 0,
            
                eventEvaluation: ''
            }
        ],

        missingStocks: '',
        runngingLowStuff: '',
        brokenStuff: ''
    }
}