import { TestBed } from '@angular/core/testing';

import { MytaskdataService } from './mytaskdata.service';

describe('MytaskdataService', () => {
  let service: MytaskdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MytaskdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
