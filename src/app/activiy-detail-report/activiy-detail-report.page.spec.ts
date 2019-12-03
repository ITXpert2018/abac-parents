import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviyDetailReportPage } from './activiy-detail-report.page';

describe('ActiviyDetailReportPage', () => {
  let component: ActiviyDetailReportPage;
  let fixture: ComponentFixture<ActiviyDetailReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiviyDetailReportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiviyDetailReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
