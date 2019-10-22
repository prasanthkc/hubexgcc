import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesliderComponent } from './tileslider.component';

describe('TilesliderComponent', () => {
  let component: TilesliderComponent;
  let fixture: ComponentFixture<TilesliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilesliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TilesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
