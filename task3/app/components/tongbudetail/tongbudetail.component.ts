import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { filter, map} from 'rxjs/operators';
@Component({
  selector: 'app-tongbudetail',
  templateUrl: './tongbudetail.component.html',
  styleUrls: ['./tongbudetail.component.css']
})
export class TongbudetailComponent implements OnInit {

  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router) { }
  courseId: number;
  course;
  flag: boolean = false;
  num = 3;
  change(event) {
    this.num = event.target.value;
  }
  // jsonObject: Object={foo:"bar",name:"bob"};
  ngOnInit() {
    this.courseId = this.router.snapshot.params['courseId'];
     this.http.get('/api/courses' + this.courseId)// .pipe(map(data => {
    //   data.name = 'haha';
    //   return data;
    // })).pipe(filter(data =>{
    //   return data.id === 3;
    // }))
    .subscribe(data => {
      console.log(data);
      this.course = data;
    });
  }

}
