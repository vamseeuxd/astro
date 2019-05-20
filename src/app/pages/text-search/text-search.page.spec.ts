import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSearchPage } from './text-search.page';

describe('TextSearchPage', () => {
  let component: TextSearchPage;
  let fixture: ComponentFixture<TextSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
