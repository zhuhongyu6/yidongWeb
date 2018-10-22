import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

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
