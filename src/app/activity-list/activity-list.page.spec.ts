import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityListPage } from './activity-list.page';

describe('ActivityListPage', () => {
  let component: ActivityListPage;
  let fixture: ComponentFixture<ActivityListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
