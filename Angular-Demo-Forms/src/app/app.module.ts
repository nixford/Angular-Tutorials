import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsTemplateDrivenComponent } from './forms-template-driven/forms-template-driven.component';
import { FormsReactiveComponent } from './forms-reactive/forms-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsTemplateDrivenComponent,
    FormsReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
