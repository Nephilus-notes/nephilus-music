import { Component } from '@angular/core';
import { BioDisplayComponent } from 'src/app/components/bio-display/bio-display.component';

@Component({
  standalone: true,
  imports: [BioDisplayComponent],
  selector: 'app-bio-viewer',
  templateUrl: './bio-viewer.component.html',
  styleUrls: ['./bio-viewer.component.css']
})
export class BioViewerComponent {
  
    constructor() { }

}
