import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsTemplateDrivenComponent } from './forms-template-driven/forms-template-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsTemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
