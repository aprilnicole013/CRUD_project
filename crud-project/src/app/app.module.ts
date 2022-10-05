import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BulletinsComponent } from './components/bulletins/bulletins.component';
import { StoreModule } from '@ngrx/store';
import { BulletinReducer } from './store/reducers/bulletin.reducer';

@NgModule({
  declarations: [
    AppComponent,
    BulletinsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
