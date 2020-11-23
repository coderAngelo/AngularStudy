import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommoditycontentComponent } from './commoditycontent.component';

describe('CommoditycontentComponent', () => {
  let component: CommoditycontentComponent;
  let fixture: ComponentFixture<CommoditycontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommoditycontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommoditycontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
