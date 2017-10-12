import {Component, OnInit, ViewChild, AfterViewInit, Inject} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {CreateImageService} from './create-image.service';
import {FileValidator} from '../../../shared/fileValidator.directive'; 
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-create-image',
  templateUrl: './create-image.component.html',
  styleUrls: ['./create-image.component.scss'],
  providers: [CreateImageService]
})
export class CreateImageComponent implements OnInit {
  creatImgForm: FormGroup;

  formErrors = {
    'image_name':'',
    'basic_image':'',
    'store_path':'',
    'app_filename':'',
  }

  validationMessages = {
    'image_name':{
      'required':'镜像名不能为空',
    },
    'basic_image':{
      'required':'请选择一个基础镜像',
    },
    'store_path':{
      'required':'请指定应用存放路径',
    },
    'app_filename':{
      'required':'请上传已编译好的应用文件',
    }
  }

  constructor(private createImageService: CreateImageService, 
    private router: Router,
    @Inject('help') private helpService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
   this.creatImgForm = this.fb.group({
     'image_name':['',Validators.required],
     'image_description':[''],
     'basic_image':['',Validators.required],
     'store_path':['',Validators.required],
     'app_filename':['',FileValidator.validate],
   });
   this.creatImgForm.valueChanges.subscribe(() => this.onValueChanges());
  }

  //提交表单，构建新镜像
  onSubmit(form){
    if(form.invalid){
      return;
    }
    let formData = new FormData();
    formData.append("image_name",form.value.image_name);
    formData.append("image_description",form.value.image_description);
    formData.append("basic_image",form.value.basic_image);
    formData.append("store_path",form.value.store_path);
    formData.append("app_filename",form.value.app_filename);

    this.createImageService.createImg(formData).subscribe((res: any) =>{
      if(res.code === 0){
        this.router.navigate(['/content/myImage']);
      }else{
        alert("构建新镜像失败");
      }
    });
  }

  onValueChanges(){
    for(const filed in this.formErrors){
      this.formErrors[filed] = '';
      const control = this.creatImgForm.get(filed);
      if(control && control.dirty && !control.valid){
        const message = this.validationMessages[filed];
        for(const key in control.errors){
          this.formErrors[filed] += message[key] + ' ';
        }
      }
    }
  }
}
