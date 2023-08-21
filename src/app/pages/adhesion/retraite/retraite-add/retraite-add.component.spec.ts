import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetraiteAddComponent } from './retraite-add.component';

describe('RetraiteAddComponent', () => {
  let component: RetraiteAddComponent;
  let fixture: ComponentFixture<RetraiteAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetraiteAddComponent]
    });
    fixture = TestBed.createComponent(RetraiteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
