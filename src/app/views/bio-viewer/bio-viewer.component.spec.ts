import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioViewerComponent } from './bio-viewer.component';
import { BioDisplayComponent } from 'src/app/components/bio-display/bio-display.component';

describe('BioViewerComponent', () => {
  let component: BioViewerComponent;
  let fixture: ComponentFixture<BioViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BioViewerComponent, BioDisplayComponent]
    });
    fixture = TestBed.createComponent(BioViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
