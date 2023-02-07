import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEmpComponent } from './card-emp.component';

describe('CardEmpComponent', () => {
  let component: CardEmpComponent;
  let fixture: ComponentFixture<CardEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
