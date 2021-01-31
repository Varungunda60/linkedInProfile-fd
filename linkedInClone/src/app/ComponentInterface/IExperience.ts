
export interface Experience{
  title: string;
  headline: string;
  startDate: string;
  endDate: string;
  employmentType: string;
  company: Company;
}

interface Company{
  name: string;
  location: string;
  industryType: string;
}
