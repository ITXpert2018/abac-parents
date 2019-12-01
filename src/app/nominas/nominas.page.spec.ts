import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NominasPage } from './nominas.page';

describe('NominasPage', () => {
  let component: NominasPage;
  let fixture: ComponentFixture<NominasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NominasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
