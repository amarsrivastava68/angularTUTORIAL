import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationComponentComponent } from './encapsulation-component.component';

describe('EncapsulationComponentComponent', () => {
  let component: EncapsulationComponentComponent;
  let fixture: ComponentFixture<EncapsulationComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncapsulationComponentComponent]
    });
    fixture = TestBed.createComponent(EncapsulationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
