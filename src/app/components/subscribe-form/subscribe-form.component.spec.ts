import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeFormComponent } from './subscribe-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from 'src/app/services/api.service';

describe('SubscribeFormComponent', () => {
  let component: SubscribeFormComponent;
  let fixture: ComponentFixture<SubscribeFormComponent>;
  let mockApiService: any;

  beforeEach(() => {
    mockApiService = jasmine.createSpyObj(['getAllEvents']);      
    TestBed.configureTestingModule({
      // declarations: [RequestFormComponent]
      imports: [ HttpClientTestingModule],
      providers: [ApiService, {
        provide: ApiService, useValue: mockApiService
      }],      
    }); 
    fixture = TestBed.createComponent(SubscribeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
