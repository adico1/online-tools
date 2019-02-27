import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YamlViewerComponent } from './yaml-viewer.component';

describe('YamlViewerComponent', () => {
  let component: YamlViewerComponent;
  let fixture: ComponentFixture<YamlViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YamlViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YamlViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
