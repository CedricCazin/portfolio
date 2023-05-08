import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FloatingGameComponent } from './floating-game.component';

describe('FloatingGameComponent', () => {
  let component: FloatingGameComponent;
  let fixture: ComponentFixture<FloatingGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FloatingGameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FloatingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
