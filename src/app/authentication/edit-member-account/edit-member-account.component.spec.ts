import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMemberAccountComponent } from './edit-member-account.component';

describe('EditMemberAccountComponent', () => {
  let component: EditMemberAccountComponent;
  let fixture: ComponentFixture<EditMemberAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMemberAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMemberAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
