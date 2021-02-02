import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EducationComponent} from './components/education/education.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {UserComponent} from './components/user/user.component';
import {SkillsComponent} from './components/skills/skills.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AddskillComponent} from './addskill/addskill.component';
import {AddeducationComponent} from './addeducation/addeducation.component';
import {AddexperienceComponent} from './addexperience/addexperience.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'education/:id',
    component: EducationComponent
  },
  {
    path: 'experience/:id',
    component: ExperienceComponent
  },
  {
    path: 'user/:id',
    component: ProfileComponent
  },
  {
    path: 'user/addSkills/:id',
    component: AddskillComponent
  },
  {
    path: 'user/addEducation/:id',
    component: AddeducationComponent
  },
  {
    path: 'user/addExperience/:id',
    component: AddexperienceComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'skills/:id',
    component: SkillsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
