export interface Skill {
  name: string;
  description: string;
  image: string;
  borderColor?: string;
}

export interface SkillType {
  name: string;
  description: string;
  skills: Skill[],
}
