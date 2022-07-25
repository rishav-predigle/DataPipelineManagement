import { TestBed } from '@angular/core/testing';

import { BotsDataService } from './bots-data.service';

describe('BotsDataService', () => {
  let service: BotsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
