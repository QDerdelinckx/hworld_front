import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCrewComponent } from './my-crew.component';

describe('MyCrewComponent', () => {
  let component: MyCrewComponent;
  let fixture: ComponentFixture<MyCrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
