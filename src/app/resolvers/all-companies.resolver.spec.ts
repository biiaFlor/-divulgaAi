import { TestBed } from '@angular/core/testing';

import { AllCompaniesResolver } from './all-companies.resolver';

describe('AllCompaniesResolver', () => {
  let resolver: AllCompaniesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AllCompaniesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
