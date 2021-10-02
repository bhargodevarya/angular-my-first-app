import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
