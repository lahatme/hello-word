import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PROJECTComponent } from './project.component';

describe('PROJECTComponent', () => {
  let component: PROJECTComponent;
  let fixture: ComponentFixture<PROJECTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PROJECTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PROJECTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
