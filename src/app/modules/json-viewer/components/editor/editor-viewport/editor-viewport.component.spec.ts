/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditorViewportComponent } from './editor-viewport.component';

describe('EditorViewportComponent', () => {
  let component: EditorViewportComponent;
  let fixture: ComponentFixture<EditorViewportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorViewportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
