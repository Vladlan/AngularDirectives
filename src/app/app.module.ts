import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BackgroundDirective } from './directives/background.directive';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BackgroundDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
