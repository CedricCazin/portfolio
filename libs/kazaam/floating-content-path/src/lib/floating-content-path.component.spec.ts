import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FloatingContentPathComponent } from './floating-content-path.component';

describe('Card3dComponent', () => {
    let component: FloatingContentPathComponent;
    let fixture: ComponentFixture<FloatingContentPathComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FloatingContentPathComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FloatingContentPathComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
