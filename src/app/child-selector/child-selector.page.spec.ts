import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSelectorPage } from './child-selector.page';

describe('ChildSelectorPage', () => {
  let component: ChildSelectorPage;
  let fixture: ComponentFixture<ChildSelectorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildSelectorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildSelectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
