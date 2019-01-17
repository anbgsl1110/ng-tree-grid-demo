import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {SettingRoutingModule} from "./setting-routing.module";

@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    NgZorroAntdModule
  ]
})
export class SettingModule { }
