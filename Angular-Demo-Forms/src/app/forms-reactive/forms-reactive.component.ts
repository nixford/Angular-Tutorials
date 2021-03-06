import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.css']
})
export class FormsReactiveComponent {

  profileForm = new FormGroup({

    firstName: new FormControl(''),

    lastName: new FormControl(''),

    email: new FormControl(''),

    // address: new FormGroup({
    //   street: new FormControl(''),
    //   city: new FormControl(''),
    //   state: new FormControl(''),
    //   zip: new FormControl('')
    // })

  });

  onSubmit() {
    if (this.profileForm.invalid) {
      console.log('Invalid input!')
    }
    console.log(this.profileForm);
  }

}
