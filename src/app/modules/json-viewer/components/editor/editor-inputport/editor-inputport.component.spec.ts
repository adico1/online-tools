/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditorInputportComponent } from './editor-inputport.component';

describe('EditorInputportComponent', () => {
  let component: EditorInputportComponent;
  let fixture: ComponentFixture<EditorInputportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorInputportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorInputportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
