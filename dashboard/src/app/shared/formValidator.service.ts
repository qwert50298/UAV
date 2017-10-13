import { Injectable } from '@angular/core';

@Injectable()
export class FormValidatorService {
    
    formErrors = {
        //构建新镜像
        'image_name':'',
        'basic_image':'',
        'store_path':'',
        'app_filename':'',
        //创建新集群
        'clustername':'',
        'imageid':'',
        'configid':'',
        'regionid':'',
        'flavor':'',
        'instancenumber':'',
        //创建新配置
        'configname':'',
        'envvariable':'',
        'configfile':'',
    }
    
    validationMessages = {
        //构建新镜像
        'image_name':{
            'required':'镜像名不能为空',
        },
        'basic_image':{
            'required':'请选择一个基础镜像',
        },
        'app_filename':{
            'required':'请上传已编译好的应用文件',
        },
        //创建新集群
        'clustername':{
            'required':'集群名称不能为空',
        },
        'imageid':{
            'required':'请选择一个镜像',
        },
        'configid':{
            'required':'请选择挂载的配置信息',
        },
        'regionid':{
            'required':'请选择部署区域',
        },
        'flavor':{
            'required':'请选择硬件规格',
        },
        'instancenumber':{
            'required':'请输入集群实例数量',
        },
        //创建新配置
        'configname':{
            'required':'配置名称不能为空',
        },
        'envvariable':{
            'required':'请输入系统环境变量',
        },
        'configfile':{
            'required':'请输入配置文件的名称和绝对路径',
        },
    }

    constructor(){}

    onValueChanges(formGroup: any){
        for(const filed in this.formErrors){
            this.formErrors[filed] = '';
            const control = formGroup.get(filed);
            if(control && control.dirty && !control.valid){
            const message = this.validationMessages[filed];
            for(const key in control.errors){
                this.formErrors[filed] += message[key] + ' ';
            }
            }
        }
    }
}