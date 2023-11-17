import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { LiveEvent } from 'src/app/models/liveEvent';
import { ApiService } from 'src/app/services/api.service';

@Component({
  standalone: true,
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css'],
  imports: [ReactiveFormsModule],
})
export class RequestFormComponent {
  upcoming_events!: LiveEvent[];

  requestForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    songTitle: ['', Validators.required],
    songArtist: ['']
  });

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}
}
