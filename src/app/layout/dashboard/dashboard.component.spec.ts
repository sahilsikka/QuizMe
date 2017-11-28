import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NgbAlertModule, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';

import {ChatComponent, NotificationComponent, TimelineComponent} from './components';
import {StatModule} from '../../shared';
import {DashboardComponent} from './dashboard.component';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                NgbCarouselModule.forRoot(),
                NgbAlertModule.forRoot(),
                StatModule,
            ],
            declarations: [
                DashboardComponent,
                TimelineComponent,
                NotificationComponent,
                ChatComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
