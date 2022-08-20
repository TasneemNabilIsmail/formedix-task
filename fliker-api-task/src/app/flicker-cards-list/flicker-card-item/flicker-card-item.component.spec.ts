import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickerCardItemComponent } from './flicker-card-item.component';

describe('FlickerCardItemComponent', () => {
  let component: FlickerCardItemComponent;
  let fixture: ComponentFixture<FlickerCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlickerCardItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlickerCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
