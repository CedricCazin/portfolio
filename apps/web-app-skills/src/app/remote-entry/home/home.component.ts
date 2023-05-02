import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component } from '@angular/core';


interface Skill {
  name: string;
  description: string;
  image: string;
  borderColor?: string;
}

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('animation', [
      transition(':enter', [
        style({ transform: 'rotateX(90Deg) rotateY(90Deg)', opacity: 0 }),  // initial
        animate('1s ease',
          style({ transform: 'none', opacity: 1 }))  // final
      ]),
    ]),
  ],
})
export class HomeComponent {

  public skills: Skill[] = [
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
      image: 'assets/angular.png',
    },
    {
      name: 'Angular',
      description: '',
      borderColor: 'silver',
      image: 'assets/angular.png',
    },
    {
      name: 'NestJs',
      description: '',
      image: 'assets/angular.png',
    },
    {
      name: 'Angular',
      description: '',
      image: 'assets/angular.png',
    },
    {
      name: 'NestJs',
      description: '',
      image: 'assets/angular.png',
    },
    {
      name: 'Angular',
      description: '',
      image: 'assets/angular.png',
    },
    {
      name: 'NestJs',
      description: '',
      image: 'assets/angular.png',
    },
    {
      name: 'Angular',
      description: '',
      image: 'assets/angular.png',
    },
    {
      name: 'NestJs',
      description: '',
      image: 'assets/angular.png',
    },
    {
      name: 'Angular',
      description: '',
      image: 'assets/angular.png',
    },
    {
      name: 'NestJs',
      description: '',
      image: 'assets/angular.png',
    },
    {
      name: 'NestJs',
      description: '',
      image: 'assets/angular.png',
    },
  ];
}
