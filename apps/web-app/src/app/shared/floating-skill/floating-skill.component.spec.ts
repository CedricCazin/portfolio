import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FloatingSkillComponent } from './floating-skill.component';

describe('FloatingSkillComponent', () => {
    let component: FloatingSkillComponent;
    let fixture: ComponentFixture<FloatingSkillComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FloatingSkillComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FloatingSkillComponent);
        component = fixture.componentInstance;
        component.skill = {
            name: 'Angular',
            description:
                'Angular is a development platform, built on TypeScript. As a platform, Angular includes: A component-based framework for building scalable web applications. A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more.',
            borderColor: 'gold',
            progress: 100,
            url: 'https://angular.io/',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
