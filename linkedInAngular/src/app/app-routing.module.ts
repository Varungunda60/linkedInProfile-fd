import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AddskillComponent} from './components/addskill/addskill.component';
import {AddeducationComponent} from './components/addeducation/addeducation.component';
import {AddexperienceComponent} from './components/addexperience/addexperience.component';
import {AddUserComponent} from './components/add-user/add-user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'addUser',
    component: AddUserComponent
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
