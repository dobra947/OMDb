import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsearchComponent } from './filmsearch.component';

describe('FilmsearchComponent', () => {
  let component: FilmsearchComponent;
  let fixture: ComponentFixture<FilmsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
