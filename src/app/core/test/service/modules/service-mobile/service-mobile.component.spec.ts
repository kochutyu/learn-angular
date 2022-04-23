import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMobileComponent } from './service-mobile.component';

describe('ServiceMobileComponent', () => {
  let component: ServiceMobileComponent;
  let fixture: ComponentFixture<ServiceMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
