import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatPaginator} from '@angular/material';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  displayedColumns = ['check','coverCode', 'section', 'bulletNo', 'sum','sort','add', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $("#checkAll").click(function(){
        var checkAll = $('input[id=checkAll]')[0] as HTMLInputElement;
        $('input[id=checkItem]').not(this).prop('checked', checkAll.checked);
      })
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}

export interface Element {
  check: boolean;
  coverCode: string;
  section: string;
  bulletNo: string;
  sum: number;
  sort: number;
  add: number;
  actions: number;
}

const ELEMENT_DATA: Element[] = [
  {
    check: true, 
    coverCode: 'Contract Works', 
    section: 'I', 
    bulletNo: '1.1', 
    sum: 50000000, 
    sort: 10, 
    add:0 , 
    actions:0
  },
  {
    check: true, 
    coverCode: 'Material Supplied', 
    section: 'I', 
    bulletNo: '1.2', 
    sum: 10000000, 
    sort: 20,
    add:0 , 
    actions:0
  },
];