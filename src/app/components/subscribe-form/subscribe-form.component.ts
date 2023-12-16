import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { ApiService } from 'src/app/services/api.service';
import { PatronDTO } from 'src/app/models/patronDTO';

@Component({
  standalone: true,
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css'],
  imports: [ReactiveFormsModule],
})
export class SubscribeFormComponent {
  subscribeForm = this.formbuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    emailAddress: ['', Validators.required],
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    // Do I need an eventEmitter? Or can I just import my api service here?

    // let newId = this.getPatronId();
    // console.warn(this.subscribeForm.value);
    let newPatron: PatronDTO = {
      name: String(this.subscribeForm.value.firstName + ' ' + this.subscribeForm.value.lastName),
      email: String(this.subscribeForm.value.emailAddress),
      is_admin: false,
      is_subscribed: true,
      one_time_donation: 0,
      recurring_donation: 0,
      times_at_show: 0,
    };

    this.apiService.postPatron(newPatron);
  }

  // public getPatronId(): number {
  //   let id = this.apiService.getNewPatronId();
  //   return id;
  // }

  constructor(
    private formbuilder: FormBuilder,
    private apiService: ApiService
  ) {}
}
