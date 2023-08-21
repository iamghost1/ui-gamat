import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhesionListComponent } from './adhesion-list.component';

describe('AdhesionListComponent', () => {
  let component: AdhesionListComponent;
  let fixture: ComponentFixture<AdhesionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdhesionListComponent]
    });
    fixture = TestBed.createComponent(AdhesionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
