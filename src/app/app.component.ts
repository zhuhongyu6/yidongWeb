import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// TODOList
export class AppComponent {
  txt: string;
  arr: string[] = [];
  arr1: string[] = [];
  getValue(e) {
    if (e.keyCode === 13) {
      this.arr.push(this.txt);
      // console.log(this.arr);
      this.txt = '';
    }
  }
  delete(idx) {
     this.arr.splice(idx, 1);        /*splice第一个参数：表示从下标为index的位置开始删除，第二个参数：要删除的个数*/
     this.arr1.splice(idx, 1);
  }
  change(idx) {
    this.arr1.push(this.arr[idx]);
    this.arr.splice(idx, 1);
  }
}
