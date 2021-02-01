import {Experience} from './IExperience';
import {Education} from './IEducation';
import {Skills} from './ISkills';

export interface User{
  name: string;
  password: string;
  firstName: string;
  lastName: string;
  tagLine: string;
  backgroundUrl: string;
  url: string;
  experiences?: Experience[];
  education?: Education[];
  skills?: Skills[];
}
