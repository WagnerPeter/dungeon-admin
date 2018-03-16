using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DungeonAdmin.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class DayOverviewController : Controller
    {
        // GET api/dayoverview
        [HttpGet]
        public string Get()
        {
            return @"{
        date: null,
        amountHandedOver: 0,
        amountReceipt: 0,
        evaluation: '',

        employees: [
            {
            id: 5,
                name: 'Adam Porteleky',
                plannedShiftStart: null,
                shiftStart: null,
                shiftEnd: null,
        
                amountConsumed: 0,
                role: { name: 'shiftManager'},
                phoneNumber: ''
            },
            {
            id: 7,
                name: 'Veronika Polakovicova',
                plannedShiftStart: null,

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
                date: null,
                
                organizers: [
                    {
                id: 10,
                        name: 'Julli Tibenska',
                        shiftStart: null,
                        shiftEnd: null,
                        plannedShiftStart: null,
                        phoneNumber: '+421 944 555 565',
                        amountConsumed: 0,
                        role: { name: 'eventManager'}
                },
                    {
                id: 10,
                        name: 'Jakub Rehak',
                        plannedShiftStart: null,
                        shiftStart: null,
                        shiftEnd: null,
                        phoneNumber: '+421 944 111 353',
                        amountConsumed: 0,
                        role: { name: 'eventManager'}
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
    }";
    }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
