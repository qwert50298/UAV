import { Component, OnInit } from '@angular/core';
import { LoadBalanceService } from './loadbalance.service';
import { DataTableModule } from 'primeng/primeng';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-loadbalance',
  templateUrl: './loadbalance.component.html',
  styleUrls: ['./loadbalance.component.scss'],
  providers: [LoadBalanceService]
})
export class LoadBalanceComponent implements OnInit {
  public loadbalanceListOut: Array<any>;
  public loadbalanceListIn: Array<any>;

  constructor(public loadBalanceService: LoadBalanceService,
              public router: Router,
              public activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.loadBalanceService.getInfo({}).subscribe(
        res => {
        this.loadbalanceListOut = res.loadbalanceInfoOut;

        /* 负载均衡名称	所属集群	dns	协议	端口	状态	创建时间	操作*/
        /*this.loadbalanceListOut =[
         {"name":"Ib1","balance":"app1","dns":"xxx.xxx.xxx.xxx","protocol":"tcp","port":"50","state":"running" ,
         "createTime":"2017.x.x"},
         {"name":"Ib2","balance":"app1","dns":"xxx.xxx.xxx.xxx","protocol":"tcp","port":"50","state":"running" ,
         "createTime":"2017.x.x"},
         {"name":"Ib3","balance":"app1","dns":"xxx.xxx.xxx.xxx","protocol":"tcp","port":"50","state":"running" ,
         "createTime":"2017.x.x"},
         ];*/
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

  public blockUser(userId: Number): void {
    console.log(userId);
  }

  public unBlockUser(userId: Number): void {
    console.log(userId);
  }

  public resetPwd(userId: Number): void {
    console.log(userId);
  }

}
