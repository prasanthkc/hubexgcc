import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromobarComponent } from './promobar.component';

describe('PromobarComponent', () => {
  let component: PromobarComponent;
  let fixture: ComponentFixture<PromobarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromobarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromobarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
