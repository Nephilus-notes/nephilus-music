import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressViewerComponent } from './press-viewer.component';
import { VideoPlayerComponent } from 'src/app/components/video-player/video-player.component';

describe('PressViewerComponent', () => {
  let component: PressViewerComponent;
  let fixture: ComponentFixture<PressViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PressViewerComponent, VideoPlayerComponent]
    });
    fixture = TestBed.createComponent(PressViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
