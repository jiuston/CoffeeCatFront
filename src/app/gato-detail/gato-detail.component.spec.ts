import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatoDetailComponent } from './gato-detail.component';

describe('GatoDetailComponent', () => {
  let component: GatoDetailComponent;
  let fixture: ComponentFixture<GatoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
