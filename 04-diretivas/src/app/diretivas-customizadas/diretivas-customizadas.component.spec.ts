import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasCustomizadasComponent } from './diretivas-customizadas.component';

describe('DiretivasCustomizadasComponent', () => {
  let component: DiretivasCustomizadasComponent;
  let fixture: ComponentFixture<DiretivasCustomizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretivasCustomizadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivasCustomizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
