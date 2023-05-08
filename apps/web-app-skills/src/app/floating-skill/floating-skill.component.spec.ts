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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
