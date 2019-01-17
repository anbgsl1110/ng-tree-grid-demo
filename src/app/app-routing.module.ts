import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SetupComponent} from "./pages/setup/setup.component";
import {MainComponent} from "./pages/main/main.component";
import {SettingComponent} from "./pages/setting/setting.component";

const routes: Routes = [
  { path: 'setup', component: SetupComponent },
  { path: '', redirectTo: '/setup', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'setting', redirectTo: '/setting', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
