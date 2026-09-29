import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scentsbyyara } from './scentsbyyara';

describe('Scentsbyyara', () => {
  let component: Scentsbyyara;
  let fixture: ComponentFixture<Scentsbyyara>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Scentsbyyara],
    }).compileComponents();

    fixture = TestBed.createComponent(Scentsbyyara);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
