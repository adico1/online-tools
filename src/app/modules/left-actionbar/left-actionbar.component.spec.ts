import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftActionbarComponent } from './left-actionbar.component';

describe('LeftActionbarComponent', () => {
  let component: LeftActionbarComponent;
  let fixture: ComponentFixture<LeftActionbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftActionbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftActionbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
