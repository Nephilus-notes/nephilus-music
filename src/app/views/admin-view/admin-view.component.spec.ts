import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewComponent } from './admin-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from 'src/app/services/api.service';
import { CardComponent } from 'src/app/components/card/card.component';
import { SetListListComponent } from 'src/app/components/set-list-list/set-list-list.component';
import { PatronListComponent } from 'src/app/components/patron-list/patron-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdminViewComponent', () => {
  let component: AdminViewComponent;
  let fixture: ComponentFixture<AdminViewComponent>;
  let apiService: ApiService;

  beforeEach(() => {    
    TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule, RouterTestingModule],
    providers: [{
      provide: HttpClientTestingModule, useValue: apiService }],
      declarations: [AdminViewComponent, CardComponent, PatronListComponent, SetListListComponent]
    });
    fixture = TestBed.createComponent(AdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
