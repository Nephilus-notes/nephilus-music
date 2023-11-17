import { Component, Input } from '@angular/core';
import { LiveEvent } from 'src/app/models/liveEvent';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() show!:LiveEvent;

  


}
