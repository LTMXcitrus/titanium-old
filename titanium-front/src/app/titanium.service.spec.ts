import { TestBed, inject } from '@angular/core/testing';

import { TitaniumService } from './titanium.service';

describe('TitaniumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TitaniumService]
    });
  });

  it('should be created', inject([TitaniumService], (service: TitaniumService) => {
    expect(service).toBeTruthy();
  }));
});
