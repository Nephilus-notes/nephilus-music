import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { ApiService } from 'src/app/services/api.service';
import { Patron } from 'src/app/models/patron';

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

    let newId = this.getPatronId();
    console.warn(this.subscribeForm.value);
    let newPatron: Patron = {
      first_name: String(this.subscribeForm.value.firstName),
      last_name: String(this.subscribeForm.value.lastName),
      email: String(this.subscribeForm.value.emailAddress),
      id: newId,
      is_admin: false,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
      deleted: false,
      one_time_donations: 0,
      recurring_donations: 0,
      events_attended: 0,
    };

    this.apiService.postPatron(newPatron);
  }

  public getPatronId(): number {
    let id = this.apiService.getNewPatronId();
    return id;
  }

  constructor(
    private formbuilder: FormBuilder,
    private apiService: ApiService
  ) {}
}
