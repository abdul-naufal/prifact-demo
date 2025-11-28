import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalCertificatesComponent } from './digital-certificates.component';

describe('DigitalCertificatesComponent', () => {
  let component: DigitalCertificatesComponent;
  let fixture: ComponentFixture<DigitalCertificatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalCertificatesComponent]
    });
    fixture = TestBed.createComponent(DigitalCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
