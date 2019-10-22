import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicetilesComponent } from './servicetiles.component';

describe('ServicetilesComponent', () => {
  let component: ServicetilesComponent;
  let fixture: ComponentFixture<ServicetilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicetilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicetilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
