import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhesionComponent } from './adhesion.component';

describe('AdhesionComponent', () => {
  let component: AdhesionComponent;
  let fixture: ComponentFixture<AdhesionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdhesionComponent]
    });
    fixture = TestBed.createComponent(AdhesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
