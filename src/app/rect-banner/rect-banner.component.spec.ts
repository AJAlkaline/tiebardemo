import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectBannerComponent } from './rect-banner.component';

describe('RectBannerComponent', () => {
  let component: RectBannerComponent;
  let fixture: ComponentFixture<RectBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
