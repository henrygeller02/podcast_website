import { Component, OnInit, Input } from '@angular/core';
import { Episode } from '../episodetemp';
@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css']
})
export class EpisodeDetailsComponent implements OnInit {

 @Input() episode?: Episode;

  constructor() { }

  ngOnInit(): void {
  }

}
