import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiebarNavComponent } from './tiebar-nav.component';

describe('TiebarNavComponent', () => {
  let component: TiebarNavComponent;
  let fixture: ComponentFixture<TiebarNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiebarNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiebarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
