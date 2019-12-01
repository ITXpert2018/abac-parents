import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuModalPage } from './menu-modal.page';

describe('MenuModalPage', () => {
  let component: MenuModalPage;
  let fixture: ComponentFixture<MenuModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
