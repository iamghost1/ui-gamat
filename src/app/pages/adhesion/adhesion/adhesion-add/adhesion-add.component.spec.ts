import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhesionAddComponent } from './adhesion-add.component';

describe('AdhesionAddComponent', () => {
  let component: AdhesionAddComponent;
  let fixture: ComponentFixture<AdhesionAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdhesionAddComponent]
    });
    fixture = TestBed.createComponent(AdhesionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
