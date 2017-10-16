import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QueryConfigService } from './query-config.service';
import { QueryConfig } from './model/query-config';

@Component({
  selector: 'app-query-config',
  templateUrl: './query-config.component.html',
  styleUrls: ['./query-config.component.scss'],
  providers: [QueryConfigService]
})
export class QueryConfigComponent implements OnInit {

  configDetail: QueryConfig; 
  
  constructor(private queryConfigService: QueryConfigService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let that = this;
      this.queryConfigService.queryconfig(params['id']).subscribe((res: any) => {
        that.configDetail.id = params['id'];
        that.configDetail.name = params['name'];
        that.configDetail.des = params['des'];
      })
    })
    
  }

}
