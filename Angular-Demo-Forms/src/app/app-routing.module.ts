import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsTemplateDrivenComponent } from './forms-template-driven/forms-template-driven.component';
import { FormsReactiveComponent } from './forms-reactive/forms-reactive.component';

const routes: Routes = [
  { path: 'template', component: FormsTemplateDrivenComponent },
  { path: 'reactive', component: FormsReactiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
