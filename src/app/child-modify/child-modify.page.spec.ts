import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildModifyPage } from './child-modify.page';

describe('ChildModifyPage', () => {
  let component: ChildModifyPage;
  let fixture: ComponentFixture<ChildModifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildModifyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildModifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
