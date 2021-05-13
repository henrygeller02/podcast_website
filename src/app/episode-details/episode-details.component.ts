import { Component, OnInit, Input } from '@angular/core';
import { Episode } from '../episodetemp';
import { EpisodeService } from '../episode.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css']
})
export class EpisodeDetailsComponent implements OnInit {

  @Input() episode?: Episode;
  //episode: Episode;
  current_episode = 
  '<iframe src="https://anchor.fm/2v1podcast/embed/episodes/Episode-1-NFL-Draft-Talk-e10oint" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>';
  constructor(
    private route: ActivatedRoute,
    private episodeService: EpisodeService
  ) { }

  ngOnInit(): void {
   // this.getEpisode();
  }


  // getEpisode(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.episodeService.getEpisodes(id)
  //     .subscribe(hero => this.episode = episode);

//}
}
