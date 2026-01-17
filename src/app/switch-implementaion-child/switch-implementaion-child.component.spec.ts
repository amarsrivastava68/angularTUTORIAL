import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchImplementaionChildComponent } from './switch-implementaion-child.component';

describe('SwitchImplementaionChildComponent', () => {
  let component: SwitchImplementaionChildComponent;
  let fixture: ComponentFixture<SwitchImplementaionChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchImplementaionChildComponent]
    });
    fixture = TestBed.createComponent(SwitchImplementaionChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
