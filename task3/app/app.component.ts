import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


// TODOList
// export class AppComponent {
//   txt: string;
//   arr: string[] = [];
//   arr1: string[] = [];
//   getValue(e) {
//     if (e.keyCode === 13) {
//       this.arr.push(this.txt);
//       console.log(this.arr);
//       this.txt = '';
//     }
//   }
//   delete(idx) {
//      this.arr.splice(idx, 1);        /*splice第一个参数：表示从下标为index的位置开始删除，第二个参数：要删除的个数*/
//   }
//   change(idx) {
//     this.arr1.push(this.arr[idx]);
//     this.arr.splice(idx, 1);
//   }
// }


// TODOList
export class AppComponent {
  txt: string;
  counter: 0;
  arr: Msg[] = [];
  getValue(e) {
    if (e.keyCode === 13) {
      this.arr.push(new Msg(this.txt, false));
      this.txt = '';
      this.count();
    }
  }
  count() {
    this.counter = 0;
    this.arr.forEach((value, index) => {
      if (value.done) {
        this.counter++;
      }
    });
  }
  delete(idx) {
     this.arr.splice(idx, 1);        /*splice第一个参数：表示从下标为index的位置开始删除，第二个参数：要删除的个数*/
     this.count();
  }
  change(idx) {
    this.arr[idx].done = !this.arr[idx].done;
    this.count();
  }
}

// export将类暴露出去，共享使用该类
export class Msg {
  constructor( public title: string, public done: boolean) {}
}

