import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None   // None makes app.component.css a global style
})
export class AppComponent {
  serverElements = [
    {name: 'Test server 1', type: 'server', content: 'test content'},
    {name: 'Test server 2', type: 'blueprint', content: 'test content'}
  ];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onChangeFirstEl() {
    this.serverElements[0].name = "Changed name";
  }

  onDestroyFirstEl() {
    this.serverElements.splice(0,1)
  }
}
