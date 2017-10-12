import { Component, OnInit,Inject } from '@angular/core';
import {ConfigManagerService} from './config-manager.service';

@Component({
  selector: 'app-config-manager',
  templateUrl: './config-manager.component.html',
  styleUrls: ['./config-manager.component.scss'],
  providers:[ConfigManagerService]
})
export class ConfigManagerComponent implements OnInit {

  public list: Array<any>;

  constructor(private configManagerService:ConfigManagerService) { }

  ngOnInit() {
    this.configManagerService.getInfo({}).subscribe(
        res => {
        this.list = res;
      },
        error => {
        console.log('clusterInfo get');
        console.log(error); }
    );
  }

}
