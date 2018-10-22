import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { CommonService } from './services/common.service';
import { Common2Service } from './services/common2.service';
import { RouterModule , Router} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { APipe } from './a.pipe';
import { TaskComponent } from './components/task/task.component';
import { LCourseComponent } from './components/l-course/l-course.component';
import { LTongbuComponent } from './components/l-tongbu/l-tongbu.component';
import { SayComponent } from './components/say/say.component';
import { InformComponent } from './components/inform/inform.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent,
    TongbudetailComponent,
    APipe,
    TaskComponent,
    LCourseComponent,
    LTongbuComponent,
    SayComponent,
    InformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // 路由匹配从上往下依次匹配
    RouterModule.forRoot([
    {path: 'tongbu', component: TongbuComponent},
    {path: 'tongbu/:courseId', component: TongbudetailComponent},
    {path: 'course', component: CourseComponent},
    {path: 'shequ', component: ShequComponent},
    {path: 'home', component: HomeComponent, children: [
      // {path: '', component: HomeComponent},
      {path: 'task', component: TaskComponent},
      {path: 'inform', component: InformComponent},
      {path: 'l-course', component: LCourseComponent},
      {path: 'l-tongbu', component: LTongbuComponent},
      {path: 'say', component: SayComponent},
      {path: '**', component: TaskComponent},
    ]},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: ShequComponent},
  ]),
    AppRoutingModule,
    HttpClientModule
],
  // 在这里配置的（即根模块中）能在所有模块中中访问使用
  providers: [
  {provide: CommonService, useClass: Common2Service} // provide,useClass一样，可以合并写[ CommonService ],useClass指明要实例化的类
  ], // provide：保存的是 Provider 的唯一标识 (token),这里即CommonService
  bootstrap: [AppComponent],
})
export class AppModule { }
