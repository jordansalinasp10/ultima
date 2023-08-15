import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LucasComponent } from './lucas.component';

describe('LucasComponent', () => {
  let component: LucasComponent;
  let fixture: ComponentFixture<LucasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LucasComponent]
    });
    fixture = TestBed.createComponent(LucasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
