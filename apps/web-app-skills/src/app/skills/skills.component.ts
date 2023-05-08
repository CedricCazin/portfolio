import { Component } from '@angular/core';
import { SkillType } from '../shared/skill.interface';

@Component({
  selector: 'skills-home',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  // animations: [
  //   trigger('animation', [
  //     transition(':enter', [
  //       style({ transform: 'scale(0)' }),  // initial
  //       animate('1s ease',
  //         style({ transform: 'scale(1)' }))  // final
  //     ]),
  //   ]),
  // ],
})
export class SkillsComponent {

  public skills: SkillType[] = [
    {
      name: 'Frameworks',
      description: 'lorem',
      skills: [
        {
          name: 'Angular',
          description: '',
          borderColor: 'gold',
          image: 'assets/angular.png',
        },
        {
          name: 'NestJs',
          description: '',
          borderColor: 'gold',
          image: 'assets/nestjs.png',
        },
      ]
    },
    {
      name: 'Frameworks',
      description: 'lorem',
      skills: [
        {
          name: 'Angular',
          description: '',
          borderColor: 'gold',
          image: 'assets/angular.png',
        },
        {
          name: 'NestJs',
          description: '',
          borderColor: 'gold',
          image: 'assets/nestjs.png',
        },
      ]
    }
  ]
}
