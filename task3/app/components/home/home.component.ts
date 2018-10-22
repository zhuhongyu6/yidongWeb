import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  // course;
  // timer = null;
  headers = new HttpHeaders({});
  ngOnInit() {
    // this.timer = setInterval(function() {
    //   console.log(11);
    // }, 1000);
    // subscribe订阅
    // this.http.get('/api/course').subscribe((data) => {
    //   console.log(data);
    //   // this.course = data;
    // });
    // this.http.post('/api', {name: 'zhuhongyu', pwd: 123}).subscribe((data) => {
    //   console.log(data);
    // });
  }
  // ngOnDestroy只调用一次
  // ngOnDestroy() {
  // //   clearInterval(this.timer);
  //  }
}
