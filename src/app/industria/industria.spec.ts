import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Industria } from './industria';

describe('Industria', () => {
  let component: Industria;
  let fixture: ComponentFixture<Industria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Industria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Industria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
