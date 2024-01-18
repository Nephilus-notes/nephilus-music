import { Component, Input } from '@angular/core';
import { LiveEvent } from 'src/app/models/liveEvent';
import { Song } from 'src/app/models/song';
import { SongListComponent } from '../song-list/song-list.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgFor, NgIf],
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() show!:LiveEvent;
  @Input() song!: Song;
  @Input() control!: number;
}
