import {Component, Input, OnInit} from '@angular/core';
import {LocalStorageService} from "../../../services/local-storage/local-storage.service";
import {Router} from "@angular/router";
import {USERNAME} from "../../../services/local-storage/local-storage.namespace";

@Component({
  selector: 'app-left-control',
  templateUrl: './left-control.component.html',
  styleUrls: ['./left-control.component.less']
})
export class LeftControlComponent implements OnInit {
  @Input() isCollapsed: boolean;

  username: string;

  constructor(
      private store: LocalStorageService,
      private router: Router
  ) { }

  ngOnInit() {
    this.username = this.store.get(USERNAME);
  }

  goSetting() {
    this.router.navigateByUrl('/setting');
  }

}
