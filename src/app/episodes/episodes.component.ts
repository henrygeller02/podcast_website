import { Component, OnInit } from '@angular/core';
import { Episode } from '../episodetemp';
import { EPISODES } from '../episodelist';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

episodes = EPISODES;
selectedEpisode?: Episode;

  constructor() { }

  ngOnInit(): void {
  }

  
  onSelect(episode: Episode): void {
  this.selectedEpisode = episode;
  }

}
