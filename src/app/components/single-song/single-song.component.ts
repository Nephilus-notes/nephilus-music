import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from 'src/app/models/song';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-single-song',
  templateUrl: './single-song.component.html',
  styleUrls: ['./single-song.component.css']
})
export class SingleSongComponent {
  id!: number;
song!: Song;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  public getSong(): void {
    this.song = this.apiService.getOneSong(this.id)
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      
      this.id = +id;
    }
    this.getSong()
  }
}
