import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleTesterComponent } from './ng-style-tester.component';

describe('NgStyleTesterComponent', () => {
  let component: NgStyleTesterComponent;
  let fixture: ComponentFixture<NgStyleTesterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgStyleTesterComponent]
    });
    fixture = TestBed.createComponent(NgStyleTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
