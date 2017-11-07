import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftbarBannerComponent } from './giftbar-banner.component';

describe('GiftbarBannerComponent', () => {
  let component: GiftbarBannerComponent;
  let fixture: ComponentFixture<GiftbarBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftbarBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftbarBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
