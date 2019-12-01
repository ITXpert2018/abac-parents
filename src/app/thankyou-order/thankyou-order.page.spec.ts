import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouOrderPage } from './thankyou-order.page';

describe('ThankyouOrderPage', () => {
  let component: ThankyouOrderPage;
  let fixture: ComponentFixture<ThankyouOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankyouOrderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
