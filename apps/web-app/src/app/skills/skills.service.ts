import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SkillType } from './skill.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  constructor(private http: HttpClient) { }

  public get skillTypes() {
    return this.http.get<SkillType[]>('https://raw.githubusercontent.com/CedricCazin/CedricCazin/main/portfolio/skills.json');
  }

}
