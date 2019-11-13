import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // view is not encapsulated - CSS of this component is global , default option: Emulated - this component's CSS is valid only for its html, other is : Native  - ?
})

export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {name: string, type: string, content: string};
  @Input() name: string;

  constructor() {
    console.log("constructor");
  }

  ngOnChanges(changes: SimpleChanges) { // reacts ONLY to changes of properties: if property holds an object it holds reference to object in memory - change of it doesn't change the reference
    console.log("ngOnChanges");         // that is why when we change value on object, property that we want to check for changes needs to hold primitive, cause it changes with change of value of referenced object value
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

}
