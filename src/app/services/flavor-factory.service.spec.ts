import { TestBed } from '@angular/core/testing';

import { FlavorFactoryService } from './flavor-factory.service';

describe('FlavorFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlavorFactoryService = TestBed.get(FlavorFactoryService);
    expect(service).toBeTruthy();
  });
});
