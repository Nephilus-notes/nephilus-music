import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css'],
  imports: [ReactiveFormsModule]
})
export class SubscribeFormComponent {

  subscribeForm = this.formbuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    emailAddress: ['', Validators.required],

  })
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.subscribeForm.value);
  }

  constructor(private formbuilder: FormBuilder) {}
}
