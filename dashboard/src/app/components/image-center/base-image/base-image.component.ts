import { Component, OnInit,Inject } from '@angular/core';
import { BaseImageService } from './base-image.service';

@Component({
  selector: 'app-base-image',
  templateUrl: './base-image.component.html',
  styleUrls: ['./base-image.component.scss'],
  providers:[BaseImageService]
})
export class  BaseImageComponent implements OnInit {

  public clusterList: Array<any>;

  constructor(private baseImageService:BaseImageService) { }

  ngOnInit() {
    this.baseImageService.getInfo({}).subscribe(
        res => {
        this.clusterList = res;
      },
        error => {
        console.log('clusterInfo get');
        console.log(error); }
    );
    //this.activeRoute.params.subscribe(
    //    params => this.getUsersByPage(params['page'])
    //);
  }


}
