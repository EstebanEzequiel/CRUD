import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConozcaMasComponent } from './conozca-mas.component';

describe('ConozcaMasComponent', () => {
  let component: ConozcaMasComponent;
  let fixture: ComponentFixture<ConozcaMasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConozcaMasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConozcaMasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
