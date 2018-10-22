import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LCourseComponent } from './l-course.component';

describe('LCourseComponent', () => {
  let component: LCourseComponent;
  let fixture: ComponentFixture<LCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
