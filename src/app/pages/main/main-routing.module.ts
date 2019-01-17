import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { InitGuardService } from '../../services/init-guard/init-guard.service';


const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    canActivate: [ InitGuardService ],
    children: []
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MainRoutingModule { }
