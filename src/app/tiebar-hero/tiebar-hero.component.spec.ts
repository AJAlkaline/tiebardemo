import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiebarHeroComponent } from './tiebar-hero.component';

describe('TiebarHeroComponent', () => {
  let component: TiebarHeroComponent;
  let fixture: ComponentFixture<TiebarHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiebarHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiebarHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
