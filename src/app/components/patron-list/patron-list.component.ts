import { Component, Input } from '@angular/core';
import { Patron } from 'src/app/models/patron';

@Component({
  selector: 'app-patron-list',
  templateUrl: './patron-list.component.html',
  styleUrls: ['./patron-list.component.css']
})
export class PatronListComponent {
@Input() patron_list!: Patron[];
}
