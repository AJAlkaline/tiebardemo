import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiebarCardcarouselComponent } from './tiebar-cardcarousel.component';

describe('TiebarCardcarouselComponent', () => {
  let component: TiebarCardcarouselComponent;
  let fixture: ComponentFixture<TiebarCardcarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiebarCardcarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiebarCardcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
