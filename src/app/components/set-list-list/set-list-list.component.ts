import { Component, Input } from '@angular/core';
import { Setlist } from 'src/app/models/setlist';

@Component({
  selector: 'app-set-list-list',
  templateUrl: './set-list-list.component.html',
  styleUrls: ['./set-list-list.component.css']
})
export class SetListListComponent {
@Input() set_list!: Setlist[];
}
