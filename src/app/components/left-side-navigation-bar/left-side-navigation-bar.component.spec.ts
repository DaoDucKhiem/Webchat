import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideNavigationBarComponent } from './left-side-navigation-bar.component';

describe('LeftSideNavigationBarComponent', () => {
  let component: LeftSideNavigationBarComponent;
  let fixture: ComponentFixture<LeftSideNavigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSideNavigationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSideNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
