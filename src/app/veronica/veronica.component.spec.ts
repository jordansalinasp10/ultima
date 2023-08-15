import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeronicaComponent } from './veronica.component';

describe('VeronicaComponent', () => {
  let component: VeronicaComponent;
  let fixture: ComponentFixture<VeronicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeronicaComponent]
    });
    fixture = TestBed.createComponent(VeronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
