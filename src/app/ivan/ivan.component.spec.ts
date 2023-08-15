import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvanComponent } from './ivan.component';

describe('IvanComponent', () => {
  let component: IvanComponent;
  let fixture: ComponentFixture<IvanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IvanComponent]
    });
    fixture = TestBed.createComponent(IvanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
