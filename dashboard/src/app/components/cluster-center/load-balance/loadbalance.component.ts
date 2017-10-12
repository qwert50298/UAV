import { Component, OnInit } from '@angular/core';
import { LoadBalanceService } from './loadbalance.service';
import { DataTableModule } from 'primeng/primeng';
import { ActivatedRoute, Router } from '@angular/router';

class SearchParam{
  public pageNo:Number;
  public pageSize:Number;

  constructor(){
    this.pageNo = 1;
    this.pageSize = 10;
  }
}


@Component({
  selector: 'app-loadbalance',
  templateUrl: './loadbalance.component.html',
  styleUrls: ['./loadbalance.component.scss'],
  providers: [LoadBalanceService]
})
export class LoadBalanceComponent implements OnInit {
  public loadbalanceListOut: Array<any>;
  public loadbalanceListIn: Array<any>;

  public searchParam:SearchParam;
  public totalSize:Number;

  constructor(public loadBalanceService: LoadBalanceService,
              public router: Router,
              public activeRoute: ActivatedRoute) {
      this.searchParam = new SearchParam();
  }

  ngOnInit() {
    this.loadBalanceService.getInfo({}).subscribe(
        res => {
        this.loadbalanceListOut = res.loadbalanceInfoOut;
          this.totalSize = this.loadbalanceListOut.length;
        this.loadbalanceListIn = res.loadbalanceInfoIn;
      },
        error => {
        console.log('loadbalanceInfo get');
        console.log(error); }
    );
    this.activeRoute.params.subscribe(
        params => this.getUsersByPage(params['page'])
    );
  }
  public getUsersByPage(page: Number): void {
    console.log('页码>' + page);
  }

  public pageChanged(event): void {
    this.router.navigateByUrl('/workspace/components/cluster-center/load-balance/page/' + event.page);
  }

  public newUser(): void {
    this.router.navigateByUrl('/workspace/components/cluster-center/load-balance/newuser');
  }

  //public blockUser(userId: Number): void {
  //  console.log(userId);
  //}
  //
  //public unBlockUser(userId: Number): void {
  //  console.log(userId);
  //}
  //
  //public resetPwd(userId: Number): void {
  //  console.log(userId);
  //}

  gotoPage(pagingInfo){
    this.searchParam.pageNo = pagingInfo.currentPage;
    //this.queryData();
  }

}
