import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideobarComponent } from './videobar.component';

describe('VideobarComponent', () => {
  let component: VideobarComponent;
  let fixture: ComponentFixture<VideobarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideobarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideobarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
