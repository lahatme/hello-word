import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PROJECTTEAMComponent } from './project-team.component';

describe('PROJECTTEAMComponent', () => {
  let component: PROJECTTEAMComponent;
  let fixture: ComponentFixture<PROJECTTEAMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PROJECTTEAMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PROJECTTEAMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
