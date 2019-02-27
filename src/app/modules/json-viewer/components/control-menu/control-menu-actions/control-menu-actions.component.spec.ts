/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ControlMenuActionsComponent } from './control-menu-actions.component';

describe('ControlMenuActionsComponent', () => {
  let component: ControlMenuActionsComponent;
  let fixture: ComponentFixture<ControlMenuActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlMenuActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlMenuActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
