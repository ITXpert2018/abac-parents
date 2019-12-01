import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChildPage } from './my-child.page';

describe('MyChildPage', () => {
  let component: MyChildPage;
  let fixture: ComponentFixture<MyChildPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyChildPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChildPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
