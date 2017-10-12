import {Component, OnInit, ViewChild, AfterViewInit, Inject} from '@angular/core';
import {MyImageService} from './my-image.service';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.scss'],
  providers: [MyImageService]
})
export class MyImageComponent implements OnInit {

  public list: Array<any>;

  constructor(private myImageService: MyImageService, private router: Router,@Inject('help') private helpService) {
  }

  ngOnInit() {
    this.myImageService.getInfo({}).subscribe(
        res => {
        this.list = res;
      },
        error => {
        console.log('clusterInfo get');
        console.log(error); }
    );
  }
}
