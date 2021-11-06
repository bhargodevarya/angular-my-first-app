import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms'

/**
 * This is the component.
 *  selector is the tag name for the html
 * templateUrl is the location of the html code that will be rendered by the tag above
 * styleUrls is the location of the style
 */
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  text:String = 'I was Added from the component'
  buttonClick:number = 0
  pclass:String = 'greenbg'
  day:String = ''
  isDayEmpty:Boolean = this.day == ''
  days:String[] = []
  daysMap: Map<String, String> = new Map()

  constructor() { }

  ngOnInit(): void {
    this.daysMap.set('Monday', 'Fast')
    this.daysMap.set('Tuesday', 'Work')
    this.daysMap.set('Wednesday', 'Work')
    this.daysMap.set('Thursday', 'Work')
    this.daysMap.set('Friday', 'Work')
    this.daysMap.set('Saturday', 'Study')
    this.daysMap.set('Sunday', 'Reflect')
    for (let day of this.daysMap.keys()) {
      this.days.push(day)
    }
  }

  serverAdded(event:Event): void {
    console.log('Clicked', event)
    this.buttonClick = this.buttonClick + 1
    this.text = this.text.concat('Added')
  } 

  resetCount(): void {
    this.buttonClick = 0
  }

  dayChange(event:Event) {
    console.log(event.target['value'])
    this.day = event.target['value']
  }

  resetDays() {
    this.day = ''
  }

}
