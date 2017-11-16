import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SysMonitorComponent } from './sys/sys-monitor/sys-monitor.component';
import { EChartOptionDirective1 } from './sys/sys-monitor/echart-option.directive';
import { PlatformComponent } from './sys/platform/platform.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent,
    //component: MainComponent,
    //component: MainComponent,
    //
  },
  {
    path: 'main',
    component: MainComponent,
    // children: [
    //   {
    //     path: '',
    //     loadChildren: './main/main.home.module#MainModule'
    //   }
    // ]
  },
  {
    path: 'check',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: './check-management/check.management.module#checkManagementModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
