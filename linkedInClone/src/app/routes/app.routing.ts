import { Routes, RouterModule } from '@angular/router';
import {EducationComponent} from '../templates/education/education.component';
import {SkillsComponent} from '../templates/skills/skills.component';
import {ExperienceComponent} from '../templates/experience/experience.component';
import {UserComponent} from '../templates/user/user.component';
const routes: Routes = [
  {
    path: 'education' ,
    component : EducationComponent
  },
  {
    path: 'skills' ,
    component: SkillsComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path : 'user' ,
    component: UserComponent
  },
  {
    path: '**',
    component: UserComponent
  }
];
export const routing = RouterModule.forRoot(routes);
