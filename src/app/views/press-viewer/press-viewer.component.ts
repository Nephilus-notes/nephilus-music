import { Component } from '@angular/core';
import { VideoPlayerComponent } from 'src/app/components/video-player/video-player.component';

@Component({
  standalone: true,
  selector: 'app-press-viewer',
  templateUrl: './press-viewer.component.html',
  styleUrls: ['./press-viewer.component.css'],
  imports: [VideoPlayerComponent]
})
export class PressViewerComponent {

}
