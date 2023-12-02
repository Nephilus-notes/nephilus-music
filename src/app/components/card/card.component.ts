import { Component, Input } from '@angular/core';
import { LiveEvent } from 'src/app/models/liveEvent';
import { Song } from 'src/app/models/song';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() show!:LiveEvent;
  @Input() song!: Song;
  @Input() control!: number;
}
