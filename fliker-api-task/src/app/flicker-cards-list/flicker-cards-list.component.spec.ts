import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickerCardsListComponent } from './flicker-cards-list.component';

describe('FlickerCardsListComponent', () => {
  let component: FlickerCardsListComponent;
  let fixture: ComponentFixture<FlickerCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlickerCardsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlickerCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
