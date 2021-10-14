import { Component, OnInit } from '@angular/core';
import { FormsService } from './forms.serveice';
import { Todo } from './todo.model';

@Component({
  selector: 'app-forms-template-driven',
  templateUrl: './forms-template-driven.component.html',
  styleUrls: ['./forms-template-driven.component.css']
})
export class FormsTemplateDrivenComponent implements OnInit {

  tasks:Todo[] = [];

  constructor(private formsService: FormsService) { }

  ngOnInit(): void {
    // this.formsService.getTasks().subscribe(
    //   (respone) => {
    //     this.tasks = respone;
    //   }
    // );
  }

}
