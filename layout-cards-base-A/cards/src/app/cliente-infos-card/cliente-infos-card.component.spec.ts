import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteInfosCardComponent } from './cliente-infos-card.component';

describe('ClienteInfosCardComponent', () => {
  let component: ClienteInfosCardComponent;
  let fixture: ComponentFixture<ClienteInfosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteInfosCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClienteInfosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
