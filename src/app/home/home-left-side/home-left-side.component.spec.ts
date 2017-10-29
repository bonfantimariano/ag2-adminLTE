import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLeftSideComponent } from './home-left-side.component';

describe('HomeLeftSideComponent', () => {
  let component: HomeLeftSideComponent;
  let fixture: ComponentFixture<HomeLeftSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLeftSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
