import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SocialVisComponent} from './social-vis.component';

describe('SocialVisComponent', () => {
    let component: SocialVisComponent;
    let fixture: ComponentFixture<SocialVisComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SocialVisComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SocialVisComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
