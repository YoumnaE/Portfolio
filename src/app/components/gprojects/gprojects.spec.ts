import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gprojects } from './gprojects';

describe('Gprojects', () => {
  let component: Gprojects;
  let fixture: ComponentFixture<Gprojects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gprojects],
    }).compileComponents();

    fixture = TestBed.createComponent(Gprojects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
