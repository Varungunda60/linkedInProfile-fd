import {Company} from './company';

export class Experience {
  title: string;
  headline: string;
  startDate: string;
  endDate: string;
  employmentType: string;
  company: Company;
  constructor(title: string,
              headline: string,
              startDate: string,
              endDate: string,
              employmentType: string,
              company: Company
  ) {}
}
