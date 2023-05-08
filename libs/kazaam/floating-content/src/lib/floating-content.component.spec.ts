import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FloatingContentComponent } from './floating-content.component';

describe('FloatingContentComponent', () => {
  let component: FloatingContentComponent;
  let fixture: ComponentFixture<FloatingContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FloatingContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FloatingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
