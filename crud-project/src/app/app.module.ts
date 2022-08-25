import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BulletinsComponent } from './components/bulletins/bulletins.component';

@NgModule({
  declarations: [
    AppComponent,
    BulletinsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
