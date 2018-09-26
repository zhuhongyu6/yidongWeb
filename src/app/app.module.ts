import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildlistComponent } from './components/childlist/childlist.component';
import { ChildinputComponent } from './components/childinput/childinput.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildlistComponent,
    ChildinputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
