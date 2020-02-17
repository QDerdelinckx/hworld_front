import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyheroesComponent } from './myheroes.component';

describe('MyheroesComponent', () => {
  let component: MyheroesComponent;
  let fixture: ComponentFixture<MyheroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyheroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
