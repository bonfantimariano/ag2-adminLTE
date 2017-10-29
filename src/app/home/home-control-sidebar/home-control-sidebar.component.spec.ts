import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeControlSidebarComponent } from './home-control-sidebar.component';

describe('HomeControlSidebarComponent', () => {
  let component: HomeControlSidebarComponent;
  let fixture: ComponentFixture<HomeControlSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeControlSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeControlSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
