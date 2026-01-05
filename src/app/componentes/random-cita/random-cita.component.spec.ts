import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RandomCitaComponent } from './random-cita.component';

describe('RandomCitaComponent', () => {
  let component: RandomCitaComponent;
  let fixture: ComponentFixture<RandomCitaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RandomCitaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
