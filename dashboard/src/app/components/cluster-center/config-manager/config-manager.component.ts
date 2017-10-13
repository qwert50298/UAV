import { Component, OnInit,Inject } from '@angular/core';
import {ConfigManagerService} from './config-manager.service';

class SearchParam{
  public pageNo:Number;
  public pageSize:Number;

  constructor(){
    this.pageNo = 1;
    this.pageSize = 10;
  }
}

@Component({
  selector: 'app-config-manager',
  templateUrl: './config-manager.component.html',
  styleUrls: ['./config-manager.component.scss'],
  providers:[ConfigManagerService]
})
export class ConfigManagerComponent implements OnInit {

  public list: Array<any>;
  public searchParam:SearchParam;
  public totalSize:Number;

  constructor(private configManagerService:ConfigManagerService) {
    this.searchParam = new SearchParam();
  }

  ngOnInit() {
    this.configManagerService.getInfo({}).subscribe(
        res => {
          this.list = res;
          this.totalSize = this.list.length;
      },
        error => {
        console.log(error); }
    );
  }

  gotoPage(pagingInfo){
    this.searchParam.pageNo = pagingInfo.currentPage;
    //this.queryData();
  }
}
