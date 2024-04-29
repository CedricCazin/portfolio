import { Skill } from '@portfolio/angular/common';

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

export interface Experience {
    fromMonth: Months;
    fromYear: number;
    toMonth?: Months;
    toYear?: number;
    InPost?: boolean;
    company: {
        name: string;
        logoUrl?: string;
        team?: string;
        linkedInUrl?: string;
        url?: string;
    };
    title: string;
    location: string;
    description: string;
    descriptionUrl: string;
    _descriptionHtml?: string;
    skills?: Skill[];
    _skillsOpen?: boolean;
    links?: { url: string; label: string }[];
}
