import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'our-project', component: ProjectComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }