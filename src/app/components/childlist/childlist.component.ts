import { Component, OnInit, Input, } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-childlist',
  templateUrl: './childlist.component.html',
  styleUrls: ['./childlist.component.css']
})
export class ChildlistComponent implements OnInit {
  @Input() data;
  data1: string[] = [];
  change(idx) {
    this.data1.push(this.data[idx]);
    this.data.splice(idx, 1);
    this.local.set('list', this.data);
    this.local.set('list1', this.data1);
  }
  delete(idx) {
    this.data.splice(idx, 1);
    this.local.set('list', this.data);
    this.local.set('list1', this.data1);
 }
 delete1(idx) {
  this.data1.splice(idx, 1);
  this.local.set('list', this.data);
  this.local.set('list1', this.data1);
}
  constructor(private local: CommonService) {}
  ngOnInit() {
    if (this.local.get('list')) {
      this.data = this.local.get('list').split(',');
    }
    if (this.local.get('list1')) {
      this.data1 = this.local.get('list1').split(',');
    }
  }
}

