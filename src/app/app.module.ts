import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EpisodesComponent,
    EpisodeDetailsComponent,
    AboutComponent,
    ProjectComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
