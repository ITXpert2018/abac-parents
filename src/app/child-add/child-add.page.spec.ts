import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAddPage } from './child-add.page';

describe('ChildAddPage', () => {
  let component: ChildAddPage;
  let fixture: ComponentFixture<ChildAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
