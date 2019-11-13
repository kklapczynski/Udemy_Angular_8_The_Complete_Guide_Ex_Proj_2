import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // view is not encapsulated - CSS of this component is global , default option: Emulated - this component's CSS is valid only for its html, other is : Native  - ?
})

export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {name: string, type: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
