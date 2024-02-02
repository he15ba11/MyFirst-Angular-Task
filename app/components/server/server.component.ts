import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
  // styles: [`
  // p{
  //   color:blue;
  // }`]
})
export class ServerComponent {
  serverId = Math.random() * 10;
  serverStatus: string = 'offline';
  allowNewServer = false;
  serverCreationstatus = 'No Server was Created !';
  serverName = 'Server Test 1';
  serverCreated = false;
  servers = ['Server Test 1', 'Server Test 2'];

  @Input('srv') element!: { type: string; name: string; content: string };
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event?.target).value;
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverId = Math.random() * 10;
    this.servers.push(this.serverName);
    this.serverCreationstatus =
      'Server was Created ! , Name is' + this.serverName;
  }
  getServerId() {
    return this.serverId;
  }
  // part 2
  showSecret = false;
  log: any = [];
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
