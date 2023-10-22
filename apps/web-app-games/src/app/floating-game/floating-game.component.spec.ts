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
        component.game = {
            name: 'Full Throttle',
            favorite: false,
            steamId: '228360',
            image: 'https://cdn.akamai.steamstatic.com/steam/apps/228360/library_600x900.jpg',
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
