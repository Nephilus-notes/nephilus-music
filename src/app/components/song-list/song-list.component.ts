import { Component, Input } from '@angular/core';
import { Song } from 'src/app/models/song';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent {
@Input() song_list!: Song[];
}
