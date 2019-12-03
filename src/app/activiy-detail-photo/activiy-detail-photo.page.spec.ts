import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviyDetailPhotoPage } from './activiy-detail-photo.page';

describe('ActiviyDetailPhotoPage', () => {
  let component: ActiviyDetailPhotoPage;
  let fixture: ComponentFixture<ActiviyDetailPhotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiviyDetailPhotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiviyDetailPhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
