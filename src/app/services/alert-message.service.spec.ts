import { TestBed } from '@angular/core/testing';

import { AlertMessageService } from './alert-message.service';

describe('AlertMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertMessageService = TestBed.get(AlertMessageService);
    expect(service).toBeTruthy();
  });
});
