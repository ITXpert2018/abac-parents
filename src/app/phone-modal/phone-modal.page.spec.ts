import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneModalPage } from './phone-modal.page';

describe('PhoneModalPage', () => {
  let component: PhoneModalPage;
  let fixture: ComponentFixture<PhoneModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
