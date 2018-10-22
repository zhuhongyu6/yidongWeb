import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {

  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router) { }
  courseId: number;
  coursess;
  // ngOnInit只执行一次
  ngOnInit() {
   // 值不变可以用这种snapshot，参数一直不变
    // this.courseId = this.router.snapshot.params['courseId'];
    // console.log(this.router.snapshot.params['courseId']);
    // 订阅可观察对象：subscribe只要值一变，函数里的语句就执行一次，参数就变一次
    this.router.params.subscribe((params) => {
      this.courseId = params['courseId'];
    });
    this.http.get('/api/course').subscribe((data) => {
      this.coursess = data;
    });
  }
  // queryParams:查询参数
  go() {
    this.route.navigate(['/tongbu', 600], {queryParams: {id: 1000}}); // navigate跳转
  }
}
