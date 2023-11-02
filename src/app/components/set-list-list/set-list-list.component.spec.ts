import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetListListComponent } from './set-list-list.component';

describe('SetListListComponent', () => {
  let component: SetListListComponent;
  let fixture: ComponentFixture<SetListListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetListListComponent]
    });
    fixture = TestBed.createComponent(SetListListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
