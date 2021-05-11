import { Injectable } from '@angular/core';
import { Episode } from './episodetemp';
import { EPISODES } from './episodelist';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor() { }



  getEpisodes(id: number): Observable<Episode> {
    const episode = EPISODES.find(ep => ep.id === id) as Episode;
    return of(episode)
  }

}
