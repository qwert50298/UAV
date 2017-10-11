import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CreateConfigService } from './create-config.service';

@Component({
  selector: 'app-create-config',
  templateUrl: './create-config.component.html',
  styleUrls: ['./create-config.component.scss'],
  providers: [CreateConfigService]
})
export class CreateConfigComponent implements OnInit {

  constructor(@Inject('help') private helpService, private createConfigService: CreateConfigService, private router: Router) { }

  ngOnInit() {

  }

  onSubmit(config){
    let data = config.value;
    this.createConfigService.addconfig(data).subscribe((res: any) => {
      if(res.code === 0){
        this.router.navigate(['/content/configManager']);
      }else{
        alert('创建新配置失败');
      }
    })
  }


}
