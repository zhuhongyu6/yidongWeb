import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LTongbuComponent } from './l-tongbu.component';

describe('LTongbuComponent', () => {
  let component: LTongbuComponent;
  let fixture: ComponentFixture<LTongbuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LTongbuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LTongbuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
