import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetraiteListComponent } from './retraite-list.component';

describe('RetraiteListComponent', () => {
  let component: RetraiteListComponent;
  let fixture: ComponentFixture<RetraiteListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetraiteListComponent]
    });
    fixture = TestBed.createComponent(RetraiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
