import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bots',
  templateUrl: './bots.component.html',
  styleUrls: ['./bots.component.scss']
})
export class BotsComponent implements OnInit {

  demoBots=[
    {name:'Bot1',status:'live',desc:'Operates as an agent for a user or other program or to simulate a human activity Bots'},
    {name:'Bot1',status:'live',desc:'Operates as an agent for a user or other program or to simulate a human activity Bots'},
    {name:'Bot1',status:'scheduled',desc:'Operates as an agent for a user or other program or to simulate a human activity Bots'},
    {name:'Bot1',status:'scheduled',desc:'Operates as an agent for a user or other program or to simulate a human activity Bots'},
    {name:'Bot1',status:'scheduled',desc:'Operates as an agent for a user or other program or to simulate a human activity Bots'},
    {name:'Bot1',status:'scheduled',desc:'Operates as an agent for a user or other program or to simulate a human activity Bots'},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
