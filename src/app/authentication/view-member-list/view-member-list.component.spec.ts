import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMemberListComponent } from './view-member-list.component';

describe('ViewMemberListComponent', () => {
  let component: ViewMemberListComponent;
  let fixture: ComponentFixture<ViewMemberListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMemberListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
