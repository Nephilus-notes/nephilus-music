import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestFormComponent } from './request-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from 'src/app/services/api.service';

describe('RequestFormComponent', () => {
  let component: RequestFormComponent;
  let fixture: ComponentFixture<RequestFormComponent>;
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
    fixture = TestBed.createComponent(RequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
