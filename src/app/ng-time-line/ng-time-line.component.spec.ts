import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTimeLineComponent } from './ng-time-line.component';

describe('NgTimeLineComponent', () => {
  let component: NgTimeLineComponent;
  let fixture: ComponentFixture<NgTimeLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTimeLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
