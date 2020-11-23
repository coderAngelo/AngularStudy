import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnameComponent } from './pname.component';

describe('PnameComponent', () => {
  let component: PnameComponent;
  let fixture: ComponentFixture<PnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
