import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [SetupComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
  ]
})
export class SetupModule { }
