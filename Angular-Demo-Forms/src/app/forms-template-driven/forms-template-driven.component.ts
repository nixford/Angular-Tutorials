import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-template-driven',
  templateUrl: './forms-template-driven.component.html',
  styleUrls: ['./forms-template-driven.component.css']
})
export class FormsTemplateDrivenComponent {
  answer: string = '';
  
  onSubmit(form: NgForm) {
    console.log(form)
    console.log(form.value)
  }
}
