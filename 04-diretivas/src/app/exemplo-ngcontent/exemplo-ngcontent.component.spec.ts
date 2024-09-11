import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploNgcontentComponent } from './exemplo-ngcontent.component';

describe('ExemploNgcontentComponent', () => {
  let component: ExemploNgcontentComponent;
  let fixture: ComponentFixture<ExemploNgcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploNgcontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploNgcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
