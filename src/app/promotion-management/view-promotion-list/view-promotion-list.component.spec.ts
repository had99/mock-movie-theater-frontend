import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPromotionListComponent } from './view-promotion-list.component';

describe('ViewPromotionListComponent', () => {
  let component: ViewPromotionListComponent;
  let fixture: ComponentFixture<ViewPromotionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPromotionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPromotionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
