import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameModalPage } from './name-modal.page';

describe('NameModalPage', () => {
  let component: NameModalPage;
  let fixture: ComponentFixture<NameModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
