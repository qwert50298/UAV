import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DeployNewClusterService } from './deploy-new-cluster.service';

@Component({
  selector: 'app-deploy-new-cluster',
  templateUrl: './deploy-new-cluster.component.html',
  styleUrls: ['./deploy-new-cluster.component.scss'],
  providers: [DeployNewClusterService]
})
export class DeployNewClusterComponent implements OnInit {

  constructor(@Inject('help') private helpService, private deployNewClusterService: DeployNewClusterService, private router: Router) { }

  ngOnInit() {

  }

  onSubmit(cluster){
    let data = cluster.value;
    this.deployNewClusterService.addCluster(data).subscribe((res: any) => {
      if(res.code === 0){
        this.router.navigate(['/content/myCluster']);
      }else{
        alert('部署新集群失败');
      }
    })
  }
}
