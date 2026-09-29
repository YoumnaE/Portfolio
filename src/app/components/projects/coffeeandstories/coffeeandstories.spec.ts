import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coffeeandstories } from './coffeeandstories';

describe('Coffeeandstories', () => {
  let component: Coffeeandstories;
  let fixture: ComponentFixture<Coffeeandstories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coffeeandstories],
    }).compileComponents();

    fixture = TestBed.createComponent(Coffeeandstories);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
