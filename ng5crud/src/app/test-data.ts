export function createTestEmployee() {
    return {
        id: 1,
        name: 'Adam Porteleky',
        shiftStart: null,
        shiftEnd: null,

        amountConsumed: 0,
        role: 'shiftManager'
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
                shiftStart: null,
                shiftEnd: null,
        
                amountConsumed: 0,
                role: 'shiftManager'
            },
            {
                id: 7,
                name: 'Veronika Polakovicova',
                shiftStart: null,
                shiftEnd: null,
        
                amountConsumed: 0,
                role: 'bartender'
            }
        ],
        events: [
            {
                id: 1,
                name: 'Just Dance Party',
                responsibilities: [
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
                        phoneNumber: '+421 944 555 565',
                        amountConsumed: 0,
                        role: 'eventManager'
                    },
                    {
                        id: 10,
                        name: 'Jakub Rehak',
                        shiftStart: null,
                        shiftEnd: null,
                        phoneNumber: '+421 944 111 353',
                        amountConsumed: 0,
                        role: 'eventManager'
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