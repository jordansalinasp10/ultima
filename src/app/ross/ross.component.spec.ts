import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RossComponent } from './ross.component';

describe('RossComponent', () => {
  let component: RossComponent;
  let fixture: ComponentFixture<RossComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RossComponent]
    });
    fixture = TestBed.createComponent(RossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
