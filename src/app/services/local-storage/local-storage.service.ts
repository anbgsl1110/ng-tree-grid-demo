import { Injectable } from '@angular/core';

const ls = localStorage;

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
    this.set('treeNodes', [{
        title: '0-0',
        key: '00',
        expanded: true,
        children: [{
          title: '0-0-0',
          key: '000',
          expanded: true,
          children: [
            {title: '0-0-0-0', key: '0000', isLeaf: true},
            {title: '0-0-0-1', key: '0001', isLeaf: true},
            {title: '0-0-0-2', key: '0002', isLeaf: true}
          ]
        }, {
          title: '0-0-0',
          key: '000',
          expanded: false,
          children: [
            {title: '0-0-0-0', key: '0000', isLeaf: true},
            {title: '0-0-0-1', key: '0001', isLeaf: true},
            {title: '0-0-0-2', key: '0002', isLeaf: true}
          ]
        }, {
          title: '0-0-0',
          key: '000',
          expanded: true,
          children: [
            {title: '0-0-0-0', key: '0000', isLeaf: true},
            {title: '0-0-0-1', key: '0001', isLeaf: true},
            {title: '0-0-0-2', key: '0002', isLeaf: true}
          ]
        }]
      }, {
        title: '0-1',
        key: '01',
        children: [{
          title: '0-1-0',
          key: '010',
          children: [
            {title: '0-1-0-0', key: '0100', isLeaf: true},
            {title: '0-1-0-1', key: '0101', isLeaf: true},
            {title: '0-1-0-2', key: '0102', isLeaf: true}
          ]
        }, {
          title: '0-1-1',
          key: '011',
          children: [
            {title: '0-1-1-0', key: '0110', isLeaf: true},
            {title: '0-1-1-1', key: '0111', isLeaf: true},
            {title: '0-1-1-2', key: '0112', isLeaf: true}
          ]
        }]
      }, {
        title: '0-2',
        key: '02',
        isLeaf: true
      },{
        title: '0-0-0',
        key: '000',
        expanded: true,
        children: [
          {title: '0-0-0-0', key: '0000', isLeaf: true},
          {title: '0-0-0-1', key: '0001', isLeaf: true},
          {title: '0-0-0-2', key: '0002', isLeaf: true}
        ]
      },{
        title: '0-0-0',
        key: '000',
        expanded: true,
        children: [
          {title: '0-0-0-0', key: '0000', isLeaf: true},
          {title: '0-0-0-1', key: '0001', isLeaf: true},
          {title: '0-0-0-2', key: '0002', isLeaf: true}
        ]
      },{
        title: '0-0-0',
        key: '000',
        expanded: true,
        children: [
          {title: '0-0-0-0', key: '0000', isLeaf: true},
          {title: '0-0-0-1', key: '0001', isLeaf: true},
          {title: '0-0-0-2', key: '0002', isLeaf: true}
        ]
      }]
    );

    this.set("peoples",
      [
        {
          name   : 'John Brown',
          age    : 32,
          address: 'New York No. 1 Lake Park'
        },
        {
          name   : 'Jim Green',
          age    : 42,
          address: 'London No. 1 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Jim Green',
          age    : 42,
          address: 'London No. 1 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Jim Green',
          age    : 42,
          address: 'London No. 1 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Jim Green',
          age    : 42,
          address: 'London No. 1 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Jim Green',
          age    : 42,
          address: 'London No. 1 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Jim Green',
          age    : 42,
          address: 'London No. 1 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Jim Green',
          age    : 42,
          address: 'London No. 1 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Jim Green',
          age    : 42,
          address: 'London No. 1 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        },
        {
          name   : 'Joe Black',
          age    : 32,
          address: 'Sidney No. 1 Lake Park'
        },
        {
          name   : 'Jim Red',
          age    : 32,
          address: 'London No. 2 Lake Park'
        }
      ]);
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
