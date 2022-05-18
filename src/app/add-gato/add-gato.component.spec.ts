import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGatoComponent } from './add-gato.component';

describe('AddGatoComponent', () => {
  let component: AddGatoComponent;
  let fixture: ComponentFixture<AddGatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
