import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {EducationComponent} from './components/education/education.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {UserComponent} from './components/user/user.component';
import {SkillsComponent} from './components/skills/skills.component';
import {ProfileComponent} from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'user/:id',
    component: ProfileComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
