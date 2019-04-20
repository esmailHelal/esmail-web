import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhabComponent } from './ehab.component';

describe('EhabComponent', () => {
  let component: EhabComponent;
  let fixture: ComponentFixture<EhabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
