import { TestBed } from '@angular/core/testing';

import { TypeDialogService } from './type-dialog.service';

describe('TypeDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeDialogService = TestBed.get(TypeDialogService);
    expect(service).toBeTruthy();
  });
});
