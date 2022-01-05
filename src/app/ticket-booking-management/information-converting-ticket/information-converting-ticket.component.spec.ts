import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationConvertingTicketComponent } from './information-converting-ticket.component';

describe('InformationConvertingTicketComponent', () => {
  let component: InformationConvertingTicketComponent;
  let fixture: ComponentFixture<InformationConvertingTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationConvertingTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationConvertingTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
