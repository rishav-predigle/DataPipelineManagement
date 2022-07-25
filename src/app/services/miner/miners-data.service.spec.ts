import { TestBed } from '@angular/core/testing';

import { MinersDataService } from './miners-data.service';

describe('MinersDataService', () => {
  let service: MinersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
