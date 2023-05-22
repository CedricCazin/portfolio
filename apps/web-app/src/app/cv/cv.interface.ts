import { Skill } from "../skills/skill.interface"

export type Months =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export interface CVItem {
  FromMonth: Months,
  FromYear: number,
  ToMonth?: Months,
  ToYear?: number,
  InPost?: boolean,
  Company: {
    Name: string,
    LogoUrl?: string,
    Team?: string,
    LinkedInUrl?: string,
    Url?: string,
  },
  Title: string,
  Location: string,
  Description: string,
  _DescriptionHtml?: string,
  Skills?: Skill[],

  _skillsOpen?: boolean,
}
