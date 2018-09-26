import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childinput',
  templateUrl: './childinput.component.html',
  styleUrls: ['./childinput.component.css']
})
export class ChildinputComponent implements OnInit {
  txt: string;
  @Output() getarr = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  getValue(e) {
    if (e.keyCode === 13) {
      this.geta(e);
      this.txt = '';
    }
  }
  geta(txt) {
    this.getarr.emit(this.txt);
  }
}
