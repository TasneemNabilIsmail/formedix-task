import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFlickerComponent } from './search-flicker.component';

describe('SearchFlickerComponent', () => {
  let component: SearchFlickerComponent;
  let fixture: ComponentFixture<SearchFlickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFlickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFlickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
