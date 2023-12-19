import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeFormComponent } from './subscribe-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from 'src/app/services/api.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('SubscribeFormComponent', () => {
  let component: SubscribeFormComponent;
  let fixture: ComponentFixture<SubscribeFormComponent>;
  let mockApiService: any;
  let formInfo = {
    firstName: 'Test',
    lastName: 'User',
    phoneNumber: '555-555-5555',
    emailAddress: 'user@ug.com',
  }

  // beforeEach(() => {

  // });

  beforeEach(() => {
    // mockApiService = jasmine.createSpyObj(['getAllEvents']);      
    TestBed.configureTestingModule({
      // declarations: [RequestFormComponent]
      imports: [ HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      providers: [ApiService, {
        provide: ApiService, useValue: mockApiService
      }],      
      // declarations: [ SubscribeFormComponent ]
    }); 
    fixture = TestBed.createComponent(SubscribeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the API on submit to create a new patron, which is then returned if valid', () => {
    pending();
  });
  // it('should call create Patron method on form submit', () => {
  //   /*Get button from html*/
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   // Supply id of your form below formID
  //   const getForm = fixture.debugElement.query(By.css('subscribeForm'));
  //   expect(getForm.triggerEventHandler('submit', compiled)).toBeUndefined();
  // });
});
