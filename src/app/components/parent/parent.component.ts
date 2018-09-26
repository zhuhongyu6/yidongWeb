import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  arr: string[] = [];
  @Output() click = new EventEmitter<any>();
  geta(data) {
    this.arr.push(data);
    this.local.set('list0', this.arr);
  }
  constructor(private local: CommonService) {}
  ngOnInit() {
  }

}
