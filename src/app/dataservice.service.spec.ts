/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataserviceService } from './dataservice.service';

describe('DataserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataserviceService]
    });
  });

  it('should ...', inject([DataserviceService], (service: DataserviceService) => {
    expect(service).toBeTruthy();
  }));
});
