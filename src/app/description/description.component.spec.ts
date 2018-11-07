import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DESCRIPTIONComponent } from './description.component';

describe('DESCRIPTIONComponent', () => {
  let component: DESCRIPTIONComponent;
  let fixture: ComponentFixture<DESCRIPTIONComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DESCRIPTIONComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DESCRIPTIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
