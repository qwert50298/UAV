import { Component, OnInit,Inject } from '@angular/core';
import { ClusterService } from './my-cluster.service';
import { DataTableModule } from 'primeng/primeng';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-my-cluster',
  templateUrl: './my-cluster.component.html',
  styleUrls: ['./my-cluster.component.scss'],
  providers: [ClusterService]
})
export class MyClusterComponent implements OnInit {

  public clusterList: Array<any>;
  //objs: any = [];
  //alertMessage: string;
  //alertType: string;
  ////查询条件
  //startTime:Date;
  //endTime:Date;
  //manualFlag:string = '';
  //incomeNumber:string = '';
  //serviceType:string = '';
  //totalItems: number = 1;
  //currentPage: number = 1;
  ////判定alert输入值变化
  //alertNumber = 1;
  ////蒙层显隐
  //showModal = false;
  //
  //query: any;
  //zh:any;
  constructor(public clusterService: ClusterService,
              public router: Router,
              public activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.clusterService.getInfo({}).subscribe(
        res => {
        this.clusterList = res;
      },
        error => {
        console.log('clusterInfo get');
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
    this.router.navigateByUrl('/workspace/components/cluster-center/my-cluster/page/' + event.page);
  }

  public newUser(): void {
    this.router.navigateByUrl('/workspace/components/cluster-center/my-cluster/newuser');
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
