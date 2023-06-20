import { MatTableDataSource } from "@angular/material/table";

export interface Skill {
  name: string;
  image: string;
  progress: number;
  url?: string;
  description?: string;
  borderColor?: string;
}

export interface SkillType {
  name: string;
  description: string;
  skills: Skill[],
}
