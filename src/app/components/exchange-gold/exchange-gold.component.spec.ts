import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeGoldComponent } from './exchange-gold.component';

describe('ExchangeGoldComponent', () => {
  let component: ExchangeGoldComponent;
  let fixture: ComponentFixture<ExchangeGoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeGoldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
