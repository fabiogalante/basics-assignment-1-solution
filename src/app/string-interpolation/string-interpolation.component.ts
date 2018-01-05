import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent  {

  serverId: number = 10;
  serverStatus: string = 'offline'

  getServerStatus(){
    return this.serverStatus;
  }


}
