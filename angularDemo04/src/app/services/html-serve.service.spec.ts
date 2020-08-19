import { TestBed } from '@angular/core/testing';

import { HtmlServeService } from './html-serve.service';

describe('HtmlServeService', () => {
  let service: HtmlServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
