import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpc') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;  // 1. arg: local reference or component name; {static: true} - nedded to use serverContentInput in ngOnInit()

  onAddServer(serverNameInput: HTMLInputElement) {
    // console.log(this.serverContentInput.nativeElement.value);
    this.serverCreated.emit({serverName: serverNameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }
  // onAddServer(serverNameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
  //   this.serverCreated.emit({serverName: serverNameInput.value, serverContent: serverContentInput.value});
  // }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: serverNameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  constructor() { }

  ngOnInit() {
  }

}
