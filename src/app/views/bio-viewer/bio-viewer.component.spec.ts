import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioViewerComponent } from './bio-viewer.component';

describe('BioViewerComponent', () => {
  let component: BioViewerComponent;
  let fixture: ComponentFixture<BioViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BioViewerComponent]
    });
    fixture = TestBed.createComponent(BioViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
