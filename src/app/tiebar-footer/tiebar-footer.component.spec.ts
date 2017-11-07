import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiebarFooterComponent } from './tiebar-footer.component';

describe('TiebarFooterComponent', () => {
  let component: TiebarFooterComponent;
  let fixture: ComponentFixture<TiebarFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiebarFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiebarFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
