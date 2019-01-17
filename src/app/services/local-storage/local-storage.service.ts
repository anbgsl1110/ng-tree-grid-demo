import { Injectable } from '@angular/core';

const ls = localStorage;

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
    this.set('treeNodes', LocalStorageService.getTestTreeNodes());
    this.set("peoples",LocalStorageService.getTestListDataPeoples());
  }

  // 获取tree的测试数据
  private static getTestTreeNodes() {
    let treeNodes = [];
    for (let i = 0; i < 10; i++) {
      treeNodes.push({
        title: '节点'+13*i,
        key: '00',
        expanded: true,
        children: [{
          title: '节点'+(13*i+1),
          key: '000',
          expanded: true,
          children: [
            {title: '节点'+(13*i+2), key: '0000', isLeaf: true},
            {title: '节点'+(13*i+3), key: '0001', isLeaf: true},
            {title: '节点'+(13*i+4), key: '0002', isLeaf: true}
          ]
        }, {
          title: '节点'+(13*i+5),
          key: '000',
          expanded: false,
          children: [
            {title: '节点'+(13*i+6), key: '0000', isLeaf: true},
            {title: '节点'+(13*i+7), key: '0001', isLeaf: true},
            {title: '节点'+(13*i+8), key: '0002', isLeaf: true}
          ]
        }, {
          title: '节点'+(13*i+9),
          key: '000',
          expanded: true,
          children: [
            {title: '节点'+(13*i+10), key: '0000', isLeaf: true},
            {title: '节点'+(13*i+11), key: '0001', isLeaf: true},
            {title: '节点'+(13*i+12), key: '0002', isLeaf: true}
          ]
        }]
      });
    }
    return treeNodes;
  }

  private static getTestListDataPeoples() {

    let peopleDatas = [];
    for (let i = 0; i < 100; i++) {
      peopleDatas.push({
        name   : 'test'+Math.floor(Math.random()*10),
        age    : Math.floor(Math.random()*100),
        address: '中国杭州'+ i
      });
    }

    return peopleDatas;
  }

  public get<T>(key: string): any {
    return JSON.parse(ls.getItem(key)) as T;
  }

  public getList<T>(key: string) {
    const before = ls.getItem(key);
    return before ? (JSON.parse(before) as T[]) : [];
  }

  public set(key: string, value: any): void {
    if (!value && value === undefined) { return; }
    const arr = JSON.stringify(value);
    ls.setItem(key, arr);
  }

}
