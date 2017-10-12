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

  imageName:string;
  imageDescription:string;
  basicImage:string;
  storePath:string;
  appFile: File;
  appFilename: string;

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
    formData.append("image_name",this.imageName);
    formData.append("image_description",this.imageDescription);
    formData.append("basic_image",this.basicImage);
    formData.append("store_path",this.storePath);
    formData.append("app_filename",this.appFile);

    this.createImageService.createImg(formData).subscribe((res: any) =>{
      if(res.code === 0){
        this.router.navigate(['/content/myImage']);
      }else{
        alert("构建新镜像失败");
      }
    });
  }

  fileChange(e){
    let fileList: FileList = e.target.files;
    this.appFile = fileList[0];
    this.creatImgForm.controls['app_filename'].updateValueAndValidity();
  }

  fileValidator(){

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
