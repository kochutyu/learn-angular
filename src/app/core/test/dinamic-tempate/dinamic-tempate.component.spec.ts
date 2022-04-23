import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicTempateComponent } from './dinamic-tempate.component';

describe('DinamicTempateComponent', () => {
  let component: DinamicTempateComponent;
  let fixture: ComponentFixture<DinamicTempateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinamicTempateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinamicTempateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
