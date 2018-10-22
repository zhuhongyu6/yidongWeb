import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-l-tongbu',
  templateUrl: './l-tongbu.component.html',
  styleUrls: ['./l-tongbu.component.css']
})
export class LTongbuComponent implements OnInit {

  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router) { }
  courseId: number;
  coursess;
  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.courseId = params['courseId'];
    });
    this.http.get('/api/course').subscribe((data) => {
      this.coursess = data;
    });
  }

}
