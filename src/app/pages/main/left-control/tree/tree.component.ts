import {Component, Input, OnInit} from '@angular/core';
import {NzFormatEmitEvent} from "ng-zorro-antd";
import {LocalStorageService} from "../../../../services/local-storage/local-storage.service";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  @Input() isCollapsed: boolean;

  nodes = this.store.get("treeNodes");

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  constructor(private store: LocalStorageService) { }

  ngOnInit() {
  }

}
