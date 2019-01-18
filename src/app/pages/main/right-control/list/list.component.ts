import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../../../../services/local-storage/local-storage.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private store: LocalStorageService) { }

  ngOnInit() {
  }

  nzPageSize = 10;

  searchNameList = [];
  searchAddressList = [];
  filterNameList = [
    { text: 'test0', value: 'test0' },
    { text: 'test1', value: 'test1' },
    { text: 'test2', value: 'test2' },
    { text: 'test3', value: 'test3' },
    { text: 'test4', value: 'test4' },
    { text: 'test5', value: 'test5' },
    { text: 'test6', value: 'test6' },
    { text: 'test7', value: 'test7' },
    { text: 'test8', value: 'test8' },
    { text: 'test9', value: 'test9' },
  ];
  sortMap = {
    name   : null,
    age    : null,
    address: null
  };
  sortName = null;
  sortValue = null;

  data = this.store.get("peoples");
  displayData = [ ...this.data ];

  sort(sortName: string, value: string): void {
    this.sortName = sortName;
    this.sortValue = value;
    for (const key in this.sortMap) {
      this.sortMap[ key ] = (key === sortName ? value : null);
    }
    this.search(this.searchNameList, this.searchAddressList);
  }

  search(searchNameList: string[], searchAddressList: string[]): void {
    this.searchNameList = searchNameList;
    this.searchAddressList = searchAddressList;
    const filterFunc = item => (this.searchAddressList.length ? this.searchAddressList.some(address => item.address.indexOf(address) !== -1) : true) && (this.searchNameList.length ? this.searchNameList.some(name => item.name.indexOf(name) !== -1) : true);
    const data = this.data.filter(item => filterFunc(item));
    if (this.sortName && this.sortValue) {
      this.displayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
    } else {
      this.displayData = data;
    }
  }

  resetFilters(): void {
    this.filterNameList = [
      { text: 'test0', value: 'test0' },
      { text: 'test1', value: 'test1' },
      { text: 'test2', value: 'test2' },
      { text: 'test3', value: 'test3' },
      { text: 'test4', value: 'test4' },
      { text: 'test5', value: 'test5' },
      { text: 'test6', value: 'test6' },
      { text: 'test7', value: 'test7' },
      { text: 'test8', value: 'test8' },
      { text: 'test9', value: 'test9' },
    ];
    this.searchNameList = [];
    this.searchAddressList = [];
    this.search(this.searchNameList, this.searchAddressList);
  }

  resetSortAndFilters(): void {
    this.sortName = null;
    this.sortValue = null;
    this.sortMap = {
      name   : null,
      age    : null,
      address: null
    };
    this.resetFilters();
    this.search(this.searchNameList, this.searchAddressList);
  }

}
